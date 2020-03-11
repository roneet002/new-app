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
  showToggle = (
<div>

  {this.state.Person.map((p, index)=>{
    return(
    <Person
    key={p.id}
    change={(event)=>{this.onchangeHandler(event, p.id)}}
    name={p.name}
    age={p.age}
    deleteClick={(index)=>{this.DeletePersonHandler(index)}}    
    />
    
    )
    }
    )
  }
</div>
  )
}
  return(
  <div className="App">
    <button type="button" className="toggleBtn" onClick={this.clickHandler}>card Toggle</button>
{showToggle}
<input type="text" onChange={(event)=>{this.newchangeHandler(event, Person.id)}} />
{this.state.Person.name}
</div>


)

}

}



export default App;
