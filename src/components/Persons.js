import React, { Component } from 'react'
import Person from './Person/Person'


class Persons extends Component{

    static getDerivedStateFromProps(props, state){
        console.log('[Pereson.js] getDerivedStateFromProps')
        return state
        }

// componentDidMount(){
// console.log('[Pewrson.js] component did mount')
// }
componentWillMount(){
    console.log('[Pewrson.js] component will mount')
}

 shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    return true
}   

getSnapshotBeforeUpdate(prevProps, pervState){
console.log('[Persons.js] getSnapshotBeforeUpdate' )
return {message:'snapshot'}
}
componentDidUpdate(prevProps, pervState, snapshot){
    console.log('[Persons.js] componentUpdate' )
    console.log(snapshot)
}

componentWillUnmount(){
console.log('[Persons.js] component will unmount')
}


render(){
    console.log('[Persons.js] render method' )
    return(
        this.props.Person.map((p, index)=>{
            return(
            <Person
            key={p.id}
            change={(event)=>{this.props.clicked(event, p.id)}}
            name={p.name}
            age={p.age}
            deleteClick={(index)=>{this.props.changed(index)}}     
            />    
            
            )
            }
    )
        )

}

}
export default Persons