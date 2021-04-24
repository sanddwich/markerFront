import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './ModalWindow.scss'

interface ModalWindowProps {
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

  return (
    <div className="ModalWindow">
      <div className="ModalWindow__container">
        <Container fluid className="ModalWindow__header p-0">
          <Row className="ModalWindow__header d-flex justify-content-between m-0">
            <Col xs={10} className="ModalWindow__headerTitle p-0">{props.title && props.title}</Col>
            <Col xs={2} className="ModalWindow__close p-0 d-flex justify-content-end">
              <Icon.XCircleFill width={30} height={30} fill={`#212529`} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ModalWindow
