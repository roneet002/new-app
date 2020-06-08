import React, { Component } from 'react';
import  './App.css';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilders from './BurgerBuilders/BurgerBuilders';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Checkout from './Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './Orders';

class App extends Component{

render(){
return(
  <div className="App">
    <Auxiliary>
    <Layout >
      <Switch>      
      <Route path="/checkout" component={Checkout} ></Route>
      <Route path="/Orders" component={Orders} ></Route>
      <Route path="/" exact component={BurgerBuilders} ></Route>
      </Switch>
      </Layout>
    </Auxiliary>
  </div>
 )
}
}


export default App;
