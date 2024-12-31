import "../../assets/css/index.css";
import "../../assets/css/product.css";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import "../../assets/fonts/fontawesome-webfont.ttf";
import "../../assets/fonts/FontAwesome.otf";
import "../../assets/fonts/slick.ttf";
import product01 from "../../assets/images/product01.png";
import product02 from "../../assets/images/product02.png";
import product03 from "../../assets/images/product03.png";
import product04 from "../../assets/images/product04.png";
import { useParams } from "react-router-dom";
import { getProductById } from "../../controller/productController";
import { useEffect, useState } from "react";
import { addCart } from "../../controller/cartController";
import { Breadcrumb } from "../components/breadcrumb";
import { addReview, getReview } from "../../controller/reviewController";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [refreshCart, setRefreshCart] = useState(false);
  const [review, setReview] = useState([]);
  const [tabContent, setTabContent] = useState(true);

  // Review data
  const [reviewText, setReviewText] = useState();
  const [reviewScore, setReviewScore] = useState();

  const refresh = () => {
    getProductById(id)
      .then((response) => setProduct(response))
      .then(() => {
        getReview().then((response) => {
          setReview(response.filter((element) => element.product_id == id));
        });
      });
  };

  useEffect(() => {
    refresh();
  }, []);
  console.log(review);

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

                <div className="add-to-cart mt-5">
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
                    <a
                      data-toggle="tab"
                      className="cursor-pointer"
                      onClick={() => {
                        setTabContent(true);
                      }}
                    >
                      Description
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      href="#tab2"
                      onClick={() => {
                        setTabContent(false);
                      }}
                    >
                      Reviews ({review.length})
                    </a>
                  </li>
                </ul>
                {/* <!-- /product tab nav --> */}

                {/* <!-- product tab content --> */}
                <div className="tab-content">
                  {tabContent ? (
                    <div
                      id="tab1"
                      className="fade in active active block h-auto opacity-1 overflow-hidden pb-[15px] mb-[-15px]"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <p>{product.product_description}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      id="tab3"
                      className="fade in fade in active active block h-auto opacity-1 overflow-hidden pb-[15px] mb-[-15px]"
                    >
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
                                  <div
                                    style={{
                                      width: `${parseInt(
                                        (review.filter(
                                          (element) => element.review_skor == 5
                                        ).length /
                                          review.length) *
                                          100
                                      )}%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="sum">5</span>
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
                                  <div
                                    style={{
                                      width: `${parseInt(
                                        (review.filter(
                                          (element) => element.review_skor == 4
                                        ).length /
                                          review.length) *
                                          100
                                      )}%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="sum">4</span>
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
                                  <div
                                    style={{
                                      width: `${parseInt(
                                        (review.filter(
                                          (element) => element.review_skor == 3
                                        ).length /
                                          review.length) *
                                          100
                                      )}%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="sum">3</span>
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
                                  <div
                                    style={{
                                      width: `${parseInt(
                                        (review.filter(
                                          (element) => element.review_skor == 2
                                        ).length /
                                          review.length) *
                                          100
                                      )}%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="sum">2</span>
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
                                  <div
                                    style={{
                                      width: `${parseInt(
                                        (review.filter(
                                          (element) => element.review_skor == 1
                                        ).length /
                                          review.length) *
                                          100
                                      )}%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="sum">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- /Rating --> */}

                        {/* <!-- Reviews --> */}
                        <div className="col-md-6">
                          <div id="reviews">
                            <ul className="reviews">
                              {review.map((element) => {
                                const date = new Date(element.updatedAt);
                                const formattedDate = date
                                  .toISOString()
                                  .split("T")[0];
                                return (
                                  <li>
                                    <div className="review-heading">
                                      <h5 className="name">
                                        {element.account.username}
                                      </h5>
                                      <p className="date">{formattedDate}</p>
                                      <div className="review-rating">
                                        <i
                                          className={
                                            element.review_skor >= 1
                                              ? "fa fa-star"
                                              : "fa fa-star-o empty"
                                          }
                                        ></i>
                                        <i
                                          className={
                                            element.review_skor >= 2
                                              ? "fa fa-star"
                                              : "fa fa-star-o empty"
                                          }
                                        ></i>
                                        <i
                                          className={
                                            element.review_skor >= 3
                                              ? "fa fa-star"
                                              : "fa fa-star-o empty"
                                          }
                                        ></i>
                                        <i
                                          className={
                                            element.review_skor >= 4
                                              ? "fa fa-star"
                                              : "fa fa-star-o empty"
                                          }
                                        ></i>
                                        <i
                                          className={
                                            element.review_skor >= 5
                                              ? "fa fa-star"
                                              : "fa fa-star-o empty"
                                          }
                                        ></i>
                                      </div>
                                    </div>
                                    <div className="review-body p-3">
                                      <p>{element.review_text}</p>
                                    </div>
                                    {element.review_response ? (
                                      <div className="review-body shadow-inner p-3 bg-[#EFF3F3] rounded">
                                        <p>
                                          Penjual : {element.review_response}
                                        </p>
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </li>
                                );
                              })}
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
                              <textarea
                                onChange={(e) => {
                                  setReviewText(e.target.value);
                                }}
                                className="input"
                                placeholder="Your Review"
                              ></textarea>
                              <div className="input-rating">
                                <span>Your Rating: </span>
                                <div
                                  className="stars"
                                  onChange={(e) => {
                                    setReviewScore(e.target.value);
                                  }}
                                >
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
                              <button
                                className="primary-btn"
                                onClick={() => {
                                  addReview(reviewText, reviewScore, id).then(
                                    () => {
                                      refresh();
                                    }
                                  );
                                }}
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                        {/* <!-- /Review Form --> */}
                      </div>
                    </div>
                  )}
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
