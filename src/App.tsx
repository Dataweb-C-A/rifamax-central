import Login from "@modules/Login"
import Dashboard from "@rifamax/Dashboard"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Switch>
          <Route path="/d" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
    </>
  )
}

export default App
