import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './ModalWindow.scss'

interface ModalWindowProps {
  children?: React.ReactNode
  title?: string
  closeHandler: () => void
}

const ModalWindow = (props: ModalWindowProps) => {
  useEffect(() => {
    bodyBlock()
  }, [])

  const bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  const bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  const closeButtonHandler = (): void => {
    bodyUnBlock()
    props.closeHandler()
  }

  return (
    <div className="ModalWindow">
      <div className="ModalWindow__container">
        <Container fluid className="ModalWindow__header p-0">
          <Row className="m-0 h-100">
            <Col xs={10} className="ModalWindow__headerTitle d-flex align-items-center">
              {props.title && props.title}
            </Col>
            <Col xs={2} className="ModalWindow__close d-flex justify-content-end align-items-center">
              <Icon.XCircleFill width={35} height={35} fill={`#212529`} onClick={() => closeButtonHandler()} />
            </Col>
          </Row>
        </Container>
        <Container fluid className="ModalWindow__body d-flex align-items-center justify-content-start">
          {props.children}
        </Container>
      </div>
    </div>
  )
}

export default ModalWindow
