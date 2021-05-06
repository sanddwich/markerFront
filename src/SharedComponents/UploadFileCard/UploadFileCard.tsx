import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './UploadFileCard.scss'

interface UploadFileCardProps {
  file: File
  deleteHandler: () => void
}

const UploadFileCard = (props: UploadFileCardProps) => {
  const getMb = (val: number):string => {
    return (val/1000000).toFixed(2).toString()
  }

  return (
    <Container fluid className="UploadFileCard p-0">
      <Row className="UploadFileCard__Row m-0">
        <Col xs={10} className="UploadFileCard__Col p-0">
          Файл: <strong>{props.file.name}</strong> ({getMb(props.file.size)} Mb)
        </Col>
        <Col xs={2} className="UploadFileCard__Col p-0 d-flex justify-content-center align-items-center">
          <Icon.XCircleFill width={25} height={25} fill={`#a70000`} />
        </Col>
      </Row>
    </Container>
  )
}

export default UploadFileCard
