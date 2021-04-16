import './App.scss'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'

interface AppProps {}

const App = (props: AppProps) => {
  // const [param, setParam] = useState(0)

  // const foo = ():void => {
  //   console.log('FOO')
  //   setParam(param + 1)
  //   console.log(param)
  // }

  return (
    <Container fluid className="App p-0">
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={MainLayout} />
      </Switch>
    </Container>
  )
}

export default App
