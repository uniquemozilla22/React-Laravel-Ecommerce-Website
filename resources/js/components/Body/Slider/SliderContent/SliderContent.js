import React from 'react'
import { Link } from 'react-router-dom'
import HOC from '../../../HOC/HOC'

const SliderContent = (props) => {
    return (
        <HOC>
                <div className="single-slider slider-height-1 bg-purple">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                            <div className="slider-content slider-animated-1">
                                <h3 className="animated">Smart Products</h3>
                                <h1 className="animated">{props.content}</h1>
                                <div className="slider-btn btn-hover">
                                    <Link className="animated" to={props.link}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                            <div className="slider-single-img slider-animated-1">
                                <img className="animated" src={props.image} alt={props.content}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </HOC>
    )
}

export default SliderContent
