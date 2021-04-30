import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import './InputNumberFormat.scss'

interface InputNumberFormatProps {
  mask: '0.0' | '0.00' | '0.000' | '0.0000'
  title: string
  value: number
  currency?: string
  // currency?: '₽' | '$' | '€' | '£'
  controlChangeHandler: (value: string) => void
}

const InputNumberFormat = (props: InputNumberFormatProps) => {
  const [curValue, setCureValue] = useState(props.value)

  const formatValue = (value: number): string => {
    const maskArray = props.mask.split('.')
    return (
      (props.currency ? `${props.currency} ` : '') +
      (value / parseInt(maskArray[0] + 1 + maskArray[1])).toFixed(maskArray[1].length).toString()
    )
  }

  const changeHandler = (val: string): void => {
    const cureValueStr = Number(val.replace(/\D+/g, ''))
    props.controlChangeHandler(cureValueStr.toString())
    setCureValue(cureValueStr)
  }

  return (
    <Container fluid className="InputNumberFormat">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        type="text"
        value={formatValue(curValue)}
        onChange={(event) => {
          changeHandler(event.target.value)
        }}
      ></Form.Control>
    </Container>
  )
}

export default InputNumberFormat
