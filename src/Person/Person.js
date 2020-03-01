import React from 'react';
import './Person.css';

const Person =(props)=>{
return(
<div className="Person">
<p>I am  a {props.name}  and i am {props.age} years old</p>
{props.children}
<span className="close">Close</span>
<br/>
<input type="text"/>
</div>
)
}

export default Person