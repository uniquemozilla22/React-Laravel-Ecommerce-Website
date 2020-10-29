import React from 'react'
import HOC from '../../../HOC/HOC'

const ProductDesc = () => {
    return (
        <HOC>
            
            <div class="shop-list-wrap mb-30 scroll-zoom">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div class="product-wrap">
                                            <div class="product-img">
                                                <a href="#">
                                                    <img class="default-img" src="assets/img/product/pro-1.jpg" alt=""/>
                                                    <img class="hover-img" src="assets/img/product/pro-1-1.jpg" alt=""/>
                                                </a>
                                                <span class="pink">-10%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div class="shop-list-content">
                                            <h3><a href="#">Products Name Here</a></h3>
                                            <div class="product-list-price">
                                                <span>$ 60.00</span>
                                                <span class="old">$ 90.00</span>
                                            </div>
                                            <div class="rating-review">
                                                <div class="product-list-rating">
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div>
                                                <a href="#">3 Reviews</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consecteto adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua Ut enim ad minim </p>
                                            <div class="shop-list-btn btn-hover">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
        </HOC>
    )
}

export default ProductDesc
