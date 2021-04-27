import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'
import './InputMasked.scss'

interface InputMaskedProps {
  name: string
  type: 'email' | 'number' | 'password' | 'text' | 'price'
  value: number
  controlChangeHandler: (name: string, value: string) => void
}

interface maskOptions {
  type: 'email' | 'number' | 'password' | 'text' | 'price'
  mask: string
  maskChar: string
  alwaysShowMask: boolean
  formatChars?: any
  permanents?: number[]
}

const InputMasked = (props: InputMaskedProps) => {
  const [inputMaskVariants] = useState<Array<maskOptions>>([
    {
      type: 'text',
      mask: '99/99/9999',
      maskChar: '-',
      alwaysShowMask: false,
      formatChars: {
        '9': '[0-9]',
        'a': '[A-Za-z]',
        '*': '[A-Za-z0-9]',
      },
      permanents: [2, 5],
    },
  ])

  const getMask = (): string => {
    const maskVariant = inputMaskVariants.find(maskVariant => maskVariant.type = props.type)?.mask
    if(maskVariant) {
      return maskVariant
    } else {
      return '*'
    }
  }

  return (
    <Container fluid className="InputMasked p-0">
      <Form.Group>
        <Form.Label>{props.name}</Form.Label>
        {/* <ReactInputMask mask={getMask()} maskChar="-" /> */}
        <ReactInputMask mask="99[.99]" />
      </Form.Group>
    </Container>
  )
}

export default InputMasked
