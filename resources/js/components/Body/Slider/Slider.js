
import React, { Component } from 'react'
import Axios from 'axios'
import HOC from '../../HOC/HOC'
import SliderContent from './SliderContent/SliderContent';

 class Slider extends Component {

    constructor(props){
        super(props);
        this.state={
            sliderContent:{
                image:'none',
                content:'Check your connection',
                link:'/'
            }
        }
    }

    componentDidMount(){
        Axios.get('23423423423426569').then(Response=>{
            this.setState({
                ...this.state,
                sliderContent:Response.data
            })
        })
    }
    render() {

        let slider=[];

        Object.keys(this.state.sliderContent).map((keys,index)=>[
            slider=<SliderContent image={this.state.sliderContent[keys].image} content={this.state.sliderContent[keys].content} link={this.state.sliderContent[keys].link} />
        ])
        return (
            <HOC>
               <div className="slider-area">
        <div className="slider-active owl-carousel nav-style-1">
            
         </div>
    </div> 
    <div class="suppoer-area pt-100 pb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="support-wrap mb-30 support-1">
                        <div class="support-icon">
                            <img class="animated" src="assets/img/icon-img/support-1.png" alt=""/>
                        </div>
                        <div class="support-content">
                            <h5>Free Shipping</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="support-wrap mb-30 support-2">
                        <div class="support-icon">
                            <img class="animated" src="assets/img/icon-img/support-2.png" alt=""/>
                        </div>
                        <div class="support-content">
                            <h5>Support 24/7</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="support-wrap mb-30 support-3">
                        <div class="support-icon">
                            <img class="animated" src="assets/img/icon-img/support-3.png" alt=""/>
                        </div>
                        <div class="support-content">
                            <h5>Money Return</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="support-wrap mb-30 support-4">
                        <div class="support-icon">
                            <img class="animated" src="assets/img/icon-img/support-4.png" alt=""/>
                        </div>
                        <div class="support-content">
                            <h5>Order Discount</h5>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </HOC>
        )
    }
}
export default Slider
