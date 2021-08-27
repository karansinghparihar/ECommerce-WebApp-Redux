import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ProductListing} />
        <Route path='/product/:productId' component={ProductDetails} />
        <Route path='*'><h1>Page Not Found</h1></Route>
      </Switch>
    </Router>
  )
}
export default App;