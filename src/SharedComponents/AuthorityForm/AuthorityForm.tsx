import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './AuthorityForm.scss'
import { useForm } from 'react-hook-form'
import { Console } from 'console'
import { sha256 } from 'js-sha256'

interface AuthorityFormProps {}

interface FormValues {
  email: string
  password: string
}

interface FormAdditionalErrors {
  formError: string
  requiredMessageText: string
  minLengthMessageText: string
  patternMessageText: string
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

  const handleClick = (data: any): void => {
    data.password = sha256(data.password)
    console.log(data)
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
                pattern: {value: /^\S+@\S+$/i, message: formAdditionalErrors.patternMessageText}
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

          <Button variant="primary" type="button" size="lg" onClick={handleSubmit(data => handleClick(data))}>
            Войти
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default AuthorityForm
