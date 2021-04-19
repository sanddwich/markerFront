import './App.scss'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import { connect } from 'react-redux'
import { RootState } from './Redux'
import { ToastState } from './Redux/interfaces/interfaces'
import ToastComponent from './SharedComponents/ToastComponent/ToastComponent'

interface AppProps {
  toast: ToastState
}

const App = (props: AppProps) => {
  // const [param, setParam] = useState(0)

  // const foo = ():void => {
  //   console.log('FOO')
  //   setParam(param + 1)
  //   console.log(param)
  // }

  return (
    <Container fluid className="App p-0">
      {props.toast.isActive && <ToastComponent />}

      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={MainLayout} />
      </Switch>
    </Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  const toast = state.toast
  return {
    toast,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)