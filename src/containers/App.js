import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons'
import Cockpit from  '../components/Cockpit/Cockpit'

class App extends Component{
constructor(props){
  super(props)
  this.state={
    Person:[
      {id:'abc1', name:"Amit Kumar", age:32},
      {id:'abc2', name:"Mahendere", age:30},
      {id:'abc3', name:"Mady Algan", age:28}
    ],
    showToggle:false,
    username:'Amit Kumar'
  }
}
static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps')
  return state
  }

clickHandler=()=>{
const showToggle = this.state.showToggle;
this.setState({
  showToggle:!showToggle
})
}

onchangeHandler=(event, id)=>{
const personIndex = this.state.Person.findIndex((p)=>{
return p.id===id
})
const Person = {...this.state.Person[personIndex]}
Person.name=event.target.value;

const Persons = [...this.state.Person]
Persons[personIndex]=Person
this.setState({
  Person:Persons

})  
}
DeletePersonHandler=(personIndex)=>{
const Person = [...this.state.Person];
Person.splice(personIndex, 1);
this.setState({
Person : Person
})

}


newchangeHandler=(event, id)=>{
  const personFindIndex = this.state.Person.findIndex((p)=>{
    return(p.id===id)
})
const Person = {...this.state.Person[personFindIndex]}
Person.name=event.target.value
const Persons = [...this.state.Person]
Persons[personFindIndex]=Person
this.setState({
Person:Persons
})


}



render(){
let showToggle = null;
if(this.state.showToggle){
  showToggle = <Persons  Person={this.state.Person} clicked={this.onchangeHandler} changed={this.DeletePersonHandler} />

}
return(
  <div className="App">

    <button type="button" className="toggleBtn" onClick={this.clickHandler}>card Toggle</button>
    {showToggle}
    <input type="text" onChange={(event)=>{this.newchangeHandler(event, Person.id)}} />
    {this.state.Person.name}
    <Cockpit clicking={this.clickHandler} Person={this.state.Person} />
    {showToggle}
  </div>




   
  )

}
}



export default App;
