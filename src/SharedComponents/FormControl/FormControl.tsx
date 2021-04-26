import React from 'react'
import { Container, Form } from 'react-bootstrap'
import './FormControl.scss'

interface FormControlProps {
  name: string
  value: string
  changeHandler: (val: string) => void
}

const FormControl = (props: FormControlProps) => {
  return (
    <Container fluid className="FormControl p-0">
      <Form.Group>
        <Form.Label>{props.name}</Form.Label>
      </Form.Group>
    </Container>
  )
}

export default FormControl