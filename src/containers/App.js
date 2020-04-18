import React, { Component } from 'react';
import  './App.css';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilders from './BurgerBuilders/BurgerBuilders';


class App extends Component{
// constructor(props){
//   super(props)
// }

render(){
return(
  
<div className="App">
  <Layout></Layout>
  <BurgerBuilders></BurgerBuilders>
  </div>
  )

}
}



export default App;
