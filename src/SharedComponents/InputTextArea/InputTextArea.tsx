import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import './InputTextArea.scss'

interface InputTextAreaProps {
  title: string
  value: string
  controlChangeHandler: (value: string) => void
}

const InputTextArea = (props: InputTextAreaProps) => {
  const [curValue, setCureValue] = useState(props.value)

  const changeHandler = (val: string): void => {
    props.controlChangeHandler(val)
    setCureValue(val)
  }

  return (
    <Container fluid className="InputTextArea">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        as="textarea"
        value={curValue}
        rows={4}
        onChange={(event) => {
          changeHandler(event.target.value)
        }}
      ></Form.Control>
    </Container>
  )
}

export default InputTextArea
