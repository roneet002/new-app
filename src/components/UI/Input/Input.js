import React from 'react'
import classes from './Input.module.css'
const Input=(props)=>{
let InputElement = null;
const Input = [classes.Input]
if(props.invalid && props.shouldvalidate && props.touched){
    Input.push(classes.invalid)
}
switch(props.elementType){
    case('input'):
    InputElement = <input onChange={props.changed} className={Input.join(' ')} {...props.elementConfig} value={props.value} />
    break;
    case('textarea'):
    InputElement = <textarea onChange={props.changed} className={Input.join(' ')} {...props.elementConfig} value={props.value} />
    break;    
    case('select'):
    InputElement = <select onChange={props.changed} className={Input.join(' ')} value={props.value} >
        {props.elementConfig.options.map(option=>{
        return(<option value={option.value} key={option.value}>{option.displayValue} </option> 
            )    
        }
        )}
    </select>
    break;
    default:
        InputElement = <input onChange={props.changed} className={Input.join(' ')}  {...props.elementConfig} value={props.value} />
}




return(
<div>
<label>{props.label}</label>
{InputElement}
</div>

)

}

export default Input