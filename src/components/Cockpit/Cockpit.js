import React, {useEffect} from 'react'
import '../../containers/App.css'
const Cockpit =(props)=>{
useEffect(()=>{
console.log('[Cockpit.js] Use effect loaded');
setTimeout(()=>{
alert('saved data')
}, 1000)
},[])


    let classes=[];
    if (props.Person.length >= 2){
    classes.push('toggleBtn')
    }
    if (props.Person.length <= 2){
      classes.push('black')
      }

      return(
         <div>
        <button type="button" className={classes.join(' ')} onClick={props.clicking}>card Toggle</button>
            <p>This is really works</p>
        </div>
 )
}
export default Cockpit
