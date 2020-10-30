import React from 'react'
import { Route, Router, Switch } from 'react-router'
import HOC from '../HOC/HOC'
import Slider from './Slider/Slider'
import Shop from './Shop/shop.js'
import Products from './Products/Products'
import Contact from './Contact/Contact'

const Body = () => {
    return (
        <HOC>
            <Switch>
                <Route component={Slider} path='/' exact/>
                <Route component={Shop} path='/shop'/>
                <Route component={Products} path='/products'/>
                <Route component ={Contact} path='/contact'/>
                <Route component ={Contact} path='/login'/>
                <Route component ={Contact} path='/register'/>
            </Switch>
        </HOC>
    )
}

export default Body
