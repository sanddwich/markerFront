import React from 'react'
import { Container, Row, Toast } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { hideToast } from '../../Redux/actions/toast'
import { ToastState } from '../../Redux/interfaces/interfaces'
import './ToastComponent.scss'

interface ToastComponentProps {
  hideToast: () => void
  toast: ToastState
}

interface ToastComponentState {}

class ToastComponent extends React.Component<ToastComponentProps, ToastComponentState> {
  render() {
    // console.log(this.props.toast)
    return (
      <React.Fragment>
        {this.props.toast.isActive ? (
          <Container fluid className="ToastComponent">
            <Toast
              className={`ToastComponent__sendRequestMessage animated animate__backInDown ${
                this.props.toast.error ? 'errorMessage' : 'successMessage'
              }`}
              show={this.props.toast.isActive}
            >
              <Row className="m-0 d-flex justify-content-end">
                <div className="ToastComponent__sendRequestMessageCloseBtn" onClick={() => this.props.hideToast()}>
                  <img src="/img/close__white.svg" alt="" />
                </div>
              </Row>
              <Row className="m-0 ToastComponent__sendRequestMessageMsg">{this.props.toast.message}</Row>
            </Toast>
          </Container>
        ) : null}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  hideToast,
}

const mapStateToProps = (state: RootState) => {
  const toast = state.toast
  return {
    toast,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastComponent)
