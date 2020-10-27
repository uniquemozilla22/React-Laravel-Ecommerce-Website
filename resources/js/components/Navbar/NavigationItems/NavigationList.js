import React from 'react'
import HOC from '../../HOC/HOC'

const NavigationList = (props) => {
// <li key ={props.key}><a href="#">{me}</a></li> 
    let display

    let menus = props.megamenu;


    if(props.mega){
       display= <li><a key ={props.key} href="#">{props.children}<i className="fa fa-angle-down"></i></a>
      
       </li>
    }
    else{
        display=<li key ={props.key}>{props.children}</li>
    }

    return (
        <HOC>
            {display}
        </HOC>
        
    )
}

export default NavigationList
