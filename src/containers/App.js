import React, { Component } from 'react';
import  './App.css';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilders from './BurgerBuilders/BurgerBuilders';



class App extends Component{
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
