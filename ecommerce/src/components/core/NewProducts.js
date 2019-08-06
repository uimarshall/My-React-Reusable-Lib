import React from "react";
import menwears from "../../img/menwears.jpg";

import menshoes from "../../img/men-shoes.jpeg";
import tabs from "../../img/tabs.jpg";
import drinks from "../../img/drinks.jpg";
const NewProducts = () => {
	return (
		<React.Fragment>
			<section className="new-products">
               
                    <div className="container">
                        <div className="title">
                            <h2>New Arrivals</h2>
                        </div> 
                        <div className="row">
                            <div className="col-md-3">
                                <div className="product-top">
                                    <img src={menshoes} alt="tabs" />
                                    <div className="overlay-right">
                                        <button className="btn btn-secondary" title="Quick Shop">
                                            <i className="fa fa-eye" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to WishList">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to Cart">
                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-bottom text-center">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                    <h3>Men Shoes</h3>
                                    <h5>$70.00</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-top">
                                    <img src={menwears} alt="tabs" />
                                    <div className="overlay-right">
                                        <button className="btn btn-secondary" title="Quick Shop">
                                            <i className="fa fa-eye" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to WishList">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to Cart">
                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-bottom text-center">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                    <i className="fa fa-star-o" aria-hidden="true" />
                                    <h3>Shirts</h3>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-top">
                                    <img src={tabs} alt="tabs" />
                                    <div className="overlay-right">
                                        <button className="btn btn-secondary" title="Quick Shop">
                                            <i className="fa fa-eye" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to WishList">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to Cart">
                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-bottom text-center">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                    <h3>Dell Laptop</h3>
                                    <h5>$40.00</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-top">
                                    <img src={drinks} alt="tabs" />
                                    <div className="overlay-right">
                                        <button className="btn btn-secondary" title="Quick Shop">
                                            <i className="fa fa-eye" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to WishList">
                                            <i className="fa fa-heart-o" aria-hidden="true" />
                                        </button>
                                        <button className="btn btn-secondary" title="Add to Cart">
                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-bottom text-center">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <h3>Medicine</h3>
                                    <h5>$710.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                
			</section>
		</React.Fragment>
	);
};

export default NewProducts;
