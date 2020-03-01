import React, { Component } from 'react';
import './Person/Person.css'

import './App.css';
import Person from './Person/Person'
class App extends Component{
constructor(props){
  super(props);
  this.state={
    Person:[
      {id:'abc1', name:"Amit Kumar", age:32},
      {id:'abc2', name:"Mahendere", age:30},
      {id:'abc3', name:"Mady Algan", age:28}
    ],
    showToggle:false
  }
}
clickHandler=()=>{
  
  const showToggle = this.state.showToggle;
this.setState({
  showToggle:!showToggle
})
}

render(){
let showToggle = null;
if(this.state.showToggle){
  showToggle = (
<div>
<Person>this is something children props</Person>
<Person></Person>
<Person></Person>
</div>
  )
}
  return(
  <div className="App">
    <button type="button" className="toggleBtn" onClick={this.clickHandler}>card Toggle</button>
{showToggle}
</div>


)

}

}



export default App;
