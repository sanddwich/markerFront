import React, { useState } from 'react'
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
import { combineReducers } from 'redux'

interface AuthorityFormProps {
  setAppMarketUser: (marketUser: MarketUser) => void
  setAppLoading: (loading: boolean) => void
  app: AppState
}

interface FormValues {
  email: string
  password: string
}

const AuthorityForm = (props: AuthorityFormProps) => {
  const [formAdditionalErrors, setFormAdditionalErrors] = useState({
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

  const handleClick = (data: OutAuthAdminData): void => {
    props.setAppLoading(true)
    authRequest(data)
    // console.log(data)
  }

  const authRequest = async (data: OutAuthAdminData): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
    })

    await api.get(Config.backConnectData.backendURL + '/sanctum/csrf-cookie').then((res) => {
      console.log(res)
    })

    // await api.post('/api/admin/login', data).then(res => {
    //   console.log(res)
    // })

    props.setAppLoading(false)
  }

  // console.log(errors)

  return (
    <Container fluid className="AuthorityForm">
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
          {props.app.loading ? (
            <div className="AuthorityForm__loader d-flex justify-content-center">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <Button variant="primary" type="button" size="lg" onClick={handleSubmit((data) => handleClick(data))}>
              Войти
            </Button>
          )}
        </Form>
      </div>
    </Container>
  )
}

const mapDispatchToProps = {
  setAppMarketUser,
  setAppLoading,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorityForm)
