import React from "react";
import clothes from "../../img/clothes.jpg";
import shirts from "../../img/shirts.jpg";
const ProductDetails = () => {
	return (
		<React.Fragment>
			<section className="single-product">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
                            <div className="slider">
                                <div
                                    id="productIndicator"
                                    className="carousel slide carousel-fade"
                                    data-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item image-box">
                                            <img src={clothes} className="d-block " alt="tab-phone" />
                                        </div>
                                        <div className="carousel-item image-box">
                                            <img src={clothes} className="d-block " alt="toys image" />
                                        </div>
                                        <div className="carousel-item image-box">
                                            <img src={clothes} className="d-block " alt="clothes" />
                                        </div>
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#productIndicator"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#productIndicator"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
						</div>
						<div className="col-md-7">
							<p className="new-arrival text-center">NEW</p>
							<h2>Women's Wears Carny Caly - Sky Blue Color</h2>
							<p>Product Code: MRS2018</p>
							<i className="fa fa-star" aria-hidden="true" />
							<i className="fa fa-star" aria-hidden="true" />
							<i className="fa fa-star" aria-hidden="true" />
							<i className="fa fa-star" aria-hidden="true" />
							<i className="fa fa-star-half-o" aria-hidden="true" />
							<p className="price">USD $18.00</p>
							<p>
								<strong>Availability:</strong> In Stock
							</p>
							<p>
								<strong>Condition:</strong> New
							</p>
							<p>
								<strong>Brand:</strong> ABC Company
							</p>
							<label htmlFor="">Quantity: </label>
							<input type="text" name="" id="" value="1" />
							<button type="submit" className="btn btn-primary">
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="product-description">
				<div className="container">
					<h6>Product Description</h6>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Repudiandae ipsam voluptatibus non accusamus eaque impedit
						laudantium vitae dolorem. Quibusdam ea minus iste quae adipisci
						itaque quasi asperiores placeat non tempore.
					</p>
					<hr />
				</div>
                <div className="container">
                    <div className="title">
                        <h2>Similar!</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product-top">
                                <img src={shirts} alt="shirts" />
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
                                <img src={shirts} alt="shirts" />
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
                                <h3>Dell Laptop</h3>
                                <h5>$40.00</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-top">
                                <img src={shirts} alt="shirts" />
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
                                <img src={shirts} alt="shirts" />
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
                                <h3>Dell Laptop</h3>
                                <h5>$40.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
			</section>
		</React.Fragment>
	);
};

export default ProductDetails;
