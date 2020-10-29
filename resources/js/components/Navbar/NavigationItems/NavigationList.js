import React from 'react'
import { Link } from 'react-router-dom';
import HOC from '../../HOC/HOC'

const NavigationList = (props) => {
// <li key ={props.key}><a href="#">{me}</a></li> 
    let display

    let menus = props.megamenu;


    if(props.mega){
       display= <li key ={props.key}><Link  to={props.to}>{props.children}<i className="fa fa-angle-down"></i></Link>
      <ul className="submenu">
          <li><Link to={props.to}>Home</Link></li>
      </ul>
       </li>
    }
    else{
        display=<li key ={props.key}><Link to={props.to}>{props.children}</Link></li>
    }

    return (
        <HOC>
            {display}
        </HOC>
        
    )
}

export default NavigationList
