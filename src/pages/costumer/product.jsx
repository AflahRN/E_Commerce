import "../../assets/css/index.css";
import "../../assets/css/product.css";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import Carousel from "react-bootstrap/Carousel";

// Bisa dihapus
import "../../assets/fonts/fontawesome-webfont.ttf";
import "../../assets/fonts/FontAwesome.otf";
import "../../assets/fonts/slick.ttf";
import product01 from "../../assets/images/product01.png";
import product02 from "../../assets/images/product02.png";
import product03 from "../../assets/images/product03.png";
import product04 from "../../assets/images/product04.png";
import product06 from "../../assets/images/product06.png";
import product08 from "../../assets/images/product08.png";
import { useParams } from "react-router-dom";
import { getProductById } from "../../controller/productController";
import { useEffect, useState } from "react";
import { addCart } from "../../controller/cartController";
import { Breadcrumb } from "../components/breadcrumb";
import { getReview } from "../../controller/reviewController";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [refreshCart, setRefreshCart] = useState(false);
  const [review, setReview] = useState([]);

  const refresh = () => {
    getProductById(id).then((response) => setProduct(response));
  };

  useEffect(() => {
    refresh();
    getReview().then((response) => {
      setReview(response.filter((element) => element.product_id == id));
    });
  }, []);

  console.log(product);
  return (
    <>
      <Header refreshChart={refreshCart} />
      <Navbar />
      <Breadcrumb
        path={[
          "All Category",
          product.category?.category_name,
          product.product_name,
        ]}
      />

      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row justify-center">
            {/* <!-- Product main img --> */}
            <img
              className="w-[400px] h-min flex"
              src={`http://localhost:3000/image/${product.product_image}`}
              alt=""
            />
            {/* <Carousel
              className="carouselItem"
              nextIcon={
                <span className="fa fa-sharp fa-chevron-right carousel-icon"></span>
              }
              prevIcon={
                <span className="fa fa-sharp fa-chevron-left carousel-icon"></span>
              }
            >
              <Carousel.Item>
                <div className="">
                  <img src={product01} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="">
                  <img src={product03} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="">
                  <img src={product06} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="">
                  <img src={product08} alt="" />
                </div>
              </Carousel.Item>
            </Carousel> */}
            {/* <!-- /Product main img --> */}

            {/* <!-- Product details --> */}
            <div className="col-md-5">
              <div className="product-details">
                <h2 className="product-name">{product.product_name}</h2>
                <div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <a className="review-link" href="#">
                    {review.length} Review(s) | Add your review
                  </a>
                </div>
                <div>
                  <h3 className="product-price">
                    Rp{" "}
                    {Intl.NumberFormat("id-ID").format(product.product_price)}
                  </h3>
                  <span className="product-available">
                    {product.product_stock > 0
                      ? `${
                          product.product_stock > 999
                            ? "999+"
                            : product.product_stock
                        } In Stock`
                      : "Out of Stock"}
                  </span>
                </div>
                <p>{product.product_description}</p>

                <div className="add-to-cart">
                  <div className="qty-label">
                    Qty
                    <div className="input-number mx-2">
                      <input
                        type="number"
                        value={quantity}
                        onChange={(value) => {
                          setQuantity(value.target.value);
                        }}
                      />
                      <span
                        className="qty-up"
                        onClick={() => {
                          if (quantity < product.product_stock) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        +
                      </span>
                      <span
                        className="qty-down"
                        onClick={() => {
                          if (quantity > 0) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </span>
                    </div>
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => {
                      if (quantity > 0) {
                        addCart(product.product_id, quantity).then(() => {
                          setRefreshCart(!refreshCart);
                        });
                      }
                    }}
                  >
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>

                <ul className="product-btns">
                  <li>
                    <a href="#">
                      <i className="fa fa-heart-o"></i> add to wishlist
                    </a>
                  </li>
                </ul>

                <ul className="product-links">
                  <li>Category:</li>
                  <li>
                    <a href="#">{product.category?.category_name}</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- /Product details --> */}

            {/* <!-- Product tab --> */}
            <div className="col-md-12">
              <div id="product-tab">
                {/* <!-- product tab nav --> */}
                <ul className="tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="#tab1">
                      Description
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Reviews ({review.length})
                    </a>
                  </li>
                </ul>
                {/* <!-- /product tab nav --> */}

                {/* <!-- product tab content --> */}
                <div className="tab-content">
                  {/* <!-- tab1  --> */}
                  <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>{product.product_description}</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /tab1  --> */}

                  {/* <!-- tab2  --> */}
                  <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /tab2  --> */}

                  {/* <!-- tab3  --> */}
                  <div id="tab3" className="tab-pane fade in">
                    <div className="row">
                      {/* <!-- Rating --> */}
                      <div className="col-md-3">
                        <div id="rating">
                          <div className="rating-avg">
                            <span>4.5</span>
                            <div className="rating-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <ul className="rating">
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "80%" }}></div>
                              </div>
                              <span className="sum">3</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "60%" }}></div>
                              </div>
                              <span className="sum">2</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div></div>
                              </div>
                              <span className="sum">0</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div></div>
                              </div>
                              <span className="sum">0</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div></div>
                              </div>
                              <span className="sum">0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- /Rating --> */}

                      {/* <!-- Reviews --> */}
                      <div className="col-md-6">
                        <div id="reviews">
                          <ul className="reviews">
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                          </ul>
                          <ul className="reviews-pagination">
                            <li className="active">1</li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">4</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- /Reviews --> */}

                      {/* <!-- Review Form --> */}
                      <div className="col-md-3">
                        <div id="review-form">
                          <form className="review-form">
                            <input
                              className="input"
                              type="text"
                              placeholder="Your Name"
                            />
                            <input
                              className="input"
                              type="email"
                              placeholder="Your Email"
                            />
                            <textarea
                              className="input"
                              placeholder="Your Review"
                            ></textarea>
                            <div className="input-rating">
                              <span>Your Rating: </span>
                              <div className="stars">
                                <input
                                  id="star5"
                                  name="rating"
                                  value="5"
                                  type="radio"
                                />
                                <label htmlFor="star5"></label>
                                <input
                                  id="star4"
                                  name="rating"
                                  value="4"
                                  type="radio"
                                />
                                <label htmlFor="star4"></label>
                                <input
                                  id="star3"
                                  name="rating"
                                  value="3"
                                  type="radio"
                                />
                                <label htmlFor="star3"></label>
                                <input
                                  id="star2"
                                  name="rating"
                                  value="2"
                                  type="radio"
                                />
                                <label htmlFor="star2"></label>
                                <input
                                  id="star1"
                                  name="rating"
                                  value="1"
                                  type="radio"
                                />
                                <label htmlFor="star1"></label>
                              </div>
                            </div>
                            <button className="primary-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                      {/* <!-- /Review Form --> */}
                    </div>
                  </div>
                  {/* <!-- /tab3  --> */}
                </div>
                {/* <!-- /product tab content  --> */}
              </div>
            </div>
            {/* <!-- /product tab --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
      {/* <!-- Section --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="title">Related Products</h3>
              </div>
            </div>

            {/* <!-- product --> */}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src={product01} alt="" />
                  <div className="product-label">
                    <span className="sale">-30%</span>
                  </div>
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating"></div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o"></i>
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye"></i>
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- /product --> */}

            {/* <!-- product --> */}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src={product02} alt="" />
                  <div className="product-label">
                    <span className="new">NEW</span>
                  </div>
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o"></i>
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye"></i>
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- /product --> */}

            <div className="clearfix visible-sm visible-xs"></div>

            {/* <!-- product --> */}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src={product03} alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o"></i>
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye"></i>
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- /product --> */}

            {/* <!-- product --> */}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src={product04} alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating"></div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o"></i>
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye"></i>
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- /product --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /Section --> */}
      {/* <!-- NEWSLETTER --> */}
      <div id="newsletter" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
                <form>
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button className="newsletter-btn">
                    <i className="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <ul className="newsletter-follow">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /NEWSLETTER --> */}

      <Footer />
    </>
  );
};