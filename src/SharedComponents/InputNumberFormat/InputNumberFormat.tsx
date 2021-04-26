import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import './InputNumberFormat.scss'

interface InputNumberFormatProps {
  mask: '0.0' | '0.00' | '0.000' | '0.0000'
  value: number
  name: string
  currency?: 'rouble' | 'dollar' | 'euro' | 'pound'
  controlChangeHandler: (name: string, value: string) => void
}

const InputNumberFormat = (props: InputNumberFormatProps) => {
  const [curValue, setCureValue] = useState(props.value)

  const [currency] = useState({
    rouble: '&#8381;',
    dollar: '&#36;',
    euro: '&#8364;',
    pound: '&#163;',
  })

  const renderHtml = (): any => {
    return <React.Component>&#8381;</React.Component>
  }

  const formatValue = (value: number): string => {
    const maskArray = props.mask.split('.')
    const resultCurrency = props.currency ? currency[props.currency] : currency['rouble']
    return (value / parseInt(maskArray[0] + 1 + maskArray[1])).toFixed(maskArray[1].length).toString()
  }

  const changeHandler = (val: string): void => {
    setCureValue(val)
  }

  return (
    <Container fluid className="InputNumberFormat p-0">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control
        type="text"
        value={formatValue(curValue)}
        onChange={event => {
          changeHandler(event.target.value)
        }}
      ></Form.Control>
    </Container>
  )
}

export default InputNumberFormat
