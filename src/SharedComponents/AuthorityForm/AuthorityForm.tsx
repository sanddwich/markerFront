import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './AuthorityForm.scss'
import { useForm } from 'react-hook-form'
import { OutAuthAdminData } from '../../Redux/interfaces/AdditionalInterfaces/OutAuthAdminData'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { setAppMarketUser, setAppLoading } from '../../Redux/actions/app'
import { MarketUser } from '../../Redux/interfaces/AdditionalInterfaces/MarketUser'
import { AppState } from '../../Redux/interfaces/interfaces'
import { Config } from '../../Config/Config'
import axios from 'axios'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import LoaderCircle from '../LoaderCircle/LoaderCircle'
import LoaderHorizontal from '../LoaderHorizontal/LoaderHorizontal'

interface MatchParams {
  id: string
}

interface AuthorityFormProps extends RouteComponentProps<MatchParams> {
  setAppMarketUser: (marketUser: MarketUser) => void
  setAppLoading: (loading: boolean) => void
  app: AppState
}

interface FormValues {
  email: string
  password: string
}

const AuthorityForm = (props: AuthorityFormProps) => {
  const [formLoader, setFormLoader] = useState(true)

  const [formAdditionalErrors, setFormAdditionalErrors] = useState({
    buttonLoading: false,
    formError: '',
    requiredMessageText: 'Обязательное поле для заполнения',
    minLengthMessageText: 'Ввведено недостаточное кол-во символов',
    patternMessageText: 'Неверный формат данных',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  useEffect(() => {
    const marketUser = localStorage.getItem('marketUser')
    if (marketUser) {
      const apiToken = JSON.parse(marketUser).apiToken
      checkAuth(apiToken)
    } else {
      setFormLoader(false)
    }
  }, [])

  const checkAuth = async (apiToken: string): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    })

    await api
      .get('/api/admin/checkAuth')
      .then((res) => {
        const marketUser: MarketUser = {
          apiToken,
          name: res.data.user.name,
          email: res.data.user.email,
          id: res.data.user.id,
          admin: res.data.user.admin,
        }
        props.setAppMarketUser(marketUser)
        localStorage.setItem('marketUser', JSON.stringify(marketUser))
        res.data && props.history.push('/admin')
      })
      .catch((error) => {
        setFormError('Ошибка связи с серверной частью приложения')
        setFormLoader(false)
      })
  }

  const setFormError = (error: string): void => {
    setFormAdditionalErrors({ ...formAdditionalErrors, formError: error })
  }

  const handleClick = (data: OutAuthAdminData): void => {
    setFormAdditionalErrors((prevState) => {
      prevState.buttonLoading = true
      return prevState
    })
    setFormError('')
    authRequest(data)
  }

  const authRequest = async (data: OutAuthAdminData): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
    })

    await api
      .post('/api/admin/login', data)
      .then((res) => {
        if (res.status === 200 && res.data.apiToken) {
          const marketUser: MarketUser = {
            apiToken: res.data.apiToken,
            name: res.data.user.name,
            email: res.data.user.email,
            id: res.data.user.id,
            admin: res.data.user.admin,
          }
          props.setAppMarketUser(marketUser)

          localStorage.setItem('marketUser', JSON.stringify(marketUser))

          props.history.push('/admin')
        } else {
          setFormError('Ошибка авторизации')
          // console.log(res)
        }
      })
      .catch((error) => {
        setFormError('Ошибка связи с серверной частью приложения')
        console.log(error)
      })

    setFormAdditionalErrors((prevState) => ({ ...prevState, buttonLoading: false }))
  }

  // console.log(errors)

  return (
    <Container fluid className="AuthorityForm">
      {formLoader ? (
        <LoaderCircle />
      ) : (
        <div className="AuthorityForm_card">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                {...register('email', {
                  required: { value: true, message: formAdditionalErrors.requiredMessageText },
                  minLength: { value: 5, message: formAdditionalErrors.minLengthMessageText },
                  pattern: { value: /^\S+@\S+$/i, message: formAdditionalErrors.patternMessageText },
                })}
              />

              {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите Пароль"
                {...register('password', {
                  required: { value: true, message: formAdditionalErrors.requiredMessageText },
                  minLength: { value: 6, message: formAdditionalErrors.minLengthMessageText },
                })}
              />

              {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
            </Form.Group>

            {formAdditionalErrors.formError !== '' ? (
              <div className="AuthorityForm__formError">
                <Form.Text className="text-danger">{formAdditionalErrors.formError}</Form.Text>
              </div>
            ) : null}
            {formAdditionalErrors.buttonLoading ? (
              <LoaderHorizontal />
            ) : (
              <Button variant="primary" type="button" size="lg" onClick={handleSubmit((data) => handleClick(data))}>
                Войти
              </Button>
            )}
          </Form>
        </div>
      )}
    </Container>
  )
}

const mapDispatchToProps = {
  setAppMarketUser,
  setAppLoading,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  const toast = state.toast
  return {
    app,
    toast,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthorityForm))
