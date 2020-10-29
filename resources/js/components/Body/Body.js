import React from 'react'
import { Route, Switch } from 'react-router'
import HOC from '../HOC/HOC'
import Slider from './Slider/Slider'
import Shop from './Shop/shop.js'

const Body = () => {
    return (
        <HOC>
            <Switch>
            <Route component={Slider} path="/" exact/>
            <Route component={()=><h1>This is the shop component</h1>} path="/shop"/>
            </Switch>
        </HOC>
    )
}

export default Body
