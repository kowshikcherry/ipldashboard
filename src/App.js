import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Teammatches from './components/TeamMatches'
import NotFound from './components/NotFound'
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={Teammatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
