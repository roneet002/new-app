import React from 'react';

const  UsereInput =(props)=>{
let validationMsg = "";

if(props.InputLength < 4){
validationMsg = "this text is too short"
}
else{
    validationMsg = "this text is too long"
}
return(


<div>


<input type="text" onChange={props.changed} value={props.username} />
{props.username}<br/>
{validationMsg}
    </div>


)


}

export default UsereInput