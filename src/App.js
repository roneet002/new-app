import React, { Component } from 'react';
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
switchNameHandler=(newName)=>{
this.setState({
  Person:[
    {id:'abc1', name:newName, age:40},
    {id:'abc2', name:"Mahender", age:30},
    {id:'abc3', name:"Mady Algan", age:28}
  ]
})
}
NameChangeHandler=(event)=>{
  this.setState({
    Person:[
      {id:'abc1', name:event.target.value, age:40},
      {id:'abc2', name:"Mahender", age:30},
      {id:'abc3', name:"Mady Algan", age:28}
    ]
  })
  }

render(){




let showToggle = null;
if(this.state.showToggle){
  showToggle = (
<div>
<Person name={this.state.Person[0].name} age={this.state.Person[0].age} click={()=>{this.switchNameHandler('sgdasdg')}}
changed={this.NameChangeHandler}>this is something children props</Person>
<Person name={this.state.Person[1].name} age={this.state.Person[1].age} ></Person>
<Person name={this.state.Person[2].name} age={this.state.Person[2].age} ></Person>
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
