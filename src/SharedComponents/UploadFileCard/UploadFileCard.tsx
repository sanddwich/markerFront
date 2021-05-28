import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './UploadFileCard.scss'

interface UploadFileCardProps {
  file: File
  deleteHandler: (name: string) => void
}

const UploadFileCard = (props: UploadFileCardProps) => {
  const getMb = (val: number): string => {
    return (val / 1000000).toFixed(3).toString()
  }

  const getPreview = (): string => {
    return URL.createObjectURL(props.file)
  }

  return (
    <Container fluid className="UploadFileCard">
      <Row className="UploadFileCard__content m-0">
        <Col xs={10} className="UploadFileCard__Col p-0 d-flex align-items-center">
          <Container fluid className="UploadFileCard__image p-0 d-flex justify-content-center">
            <div>
              <div className="text-center">
                <img src={`${getPreview()}`} alt="" />
              </div>
              <div>
                Файл:<strong>{props.file.name}</strong> ({getMb(props.file.size)} Mb)
              </div>
            </div>
          </Container>
        </Col>
        <Col xs={2} className="UploadFileCard__Col p-0 d-flex justify-content-end align-items-center">
          <Icon.XCircleFill
            width={30}
            height={30}
            fill={`#a70000`}
            onClick={() => props.deleteHandler(props.file.name)}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default UploadFileCard
