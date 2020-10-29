import React from 'react'
import HOC from '../../../HOC/HOC'

const Product = () => {
    return (
        <HOC>
            
            <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                    <div class="product-wrap mb-25 scroll-zoom">
                                        <div class="product-img">
                                            <a href="#">
                                                <img class="default-img" src="assets/img/product/pro-1.jpg" alt=""/>
                                                <img class="hover-img" src="assets/img/product/pro-1-1.jpg" alt=""/>
                                            </a>
                                            <span class="pink">-10%</span>
                                            <div class="product-action">
                                                <div class="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i class="pe-7s-like"></i></a>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i class="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                            <div class="product-rating">
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o"></i>
                                                <i class="fa fa-star-o"></i>
                                            </div>
                                            <div class="product-price">
                                                <span>$ 60.00</span>
                                                <span class="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
        </HOC>
    )
}

export default Product
