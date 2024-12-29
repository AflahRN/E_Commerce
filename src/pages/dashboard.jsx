import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Carousel from "react-bootstrap/Carousel";

// Bisa dihapus
import "../assets/fonts/fontawesome-webfont.ttf";
import "../assets/fonts/FontAwesome.otf";
import "../assets/fonts/slick.ttf";
import product01 from "../assets/images/product01.png";
import product02 from "../assets/images/product02.png";
import product03 from "../assets/images/product03.png";
import product04 from "../assets/images/product04.png";
import product05 from "../assets/images/product05.png";
import product06 from "../assets/images/product06.png";
import product07 from "../assets/images/product07.png";
import product08 from "../assets/images/product08.png";
import product09 from "../assets/images/product09.png";
import shop01 from "../assets/images/shop01.png";
import shop02 from "../assets/images/shop02.png";
import shop03 from "../assets/images/shop03.png";
import { getProduct } from "../controller/productController";
import { Link } from "react-router-dom";
import { addCart } from "../controller/cartController";

export const Dashboard = () => {
  const [topSellingPage, setTopSellingPage] = useState(1);
  const [itemPerTopSellingPage, setItemPerTopSellingPage] = useState(8);
  const [refreshCart, setRefreshCart] = useState(false);

  const [topSellingItem, setTopSellingItem] = useState([]);

  const RefreshData = () => {
    getProduct().then((response) => setTopSellingItem(response));
  };

  useEffect(() => {
    RefreshData();
  }, []);

  const [maxPageTopSelling, setMaxPageTopSelling] = useState([]);
  useEffect(() => {
    const loopMaxPageTopSelling = [];
    for (let i = 0; i < topSellingItem.length / itemPerTopSellingPage; i++) {
      loopMaxPageTopSelling.push(i + 1);
    }
    setMaxPageTopSelling(loopMaxPageTopSelling);
  }, []);

  return (
    <>
      <Header refreshChart={refreshCart}></Header>
      <Navbar></Navbar>
      {/* <!-- Products tab & slick --> */}
      <Carousel
        style={{ backgroundColor: "#d10024" }}
        pause="hover"
        interval={5000}
      >
        {[1].map((element, index) => {
          return (
            <Carousel.Item style={{ textAlign: "center" }} key={index}>
              <img
                src={product01}
                style={{ paddingBottom: "5vh", width: "35vw" }}
              ></img>
              <Carousel.Caption>
                <h3
                  style={{ fontWeight: "bold", fontSize: 25, color: "white" }}
                >
                  Nama Barang
                </h3>
                <p
                  style={{
                    fontWeight: "lighter",
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  Category
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {/* <!-- Products tab & slick --> */}
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- shop --> */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={shop01} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Laptop
                    <br />
                    Collection
                  </h3>
                  <a href="/store" className="cta-btn">
                    Shop now <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- /shop --> */}

            {/* <!-- shop --> */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={shop03} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Accessories
                    <br />
                    Collection
                  </h3>
                  <a href="#" className="cta-btn">
                    Shop now <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- /shop --> */}

            {/* <!-- shop --> */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={shop02} alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Cameras
                    <br />
                    Collection
                  </h3>
                  <a href="#" className="cta-btn">
                    Shop now <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- /shop --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
      {/* <!-- HOT DEAL SECTION --> */}
      <div id="hot-deal" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Days</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Hours</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Mins</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>60</h3>
                      <span>Secs</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collection Up to 50% OFF</p>
                <a className="primary-btn cta-btn" href="#">
                  Shop now
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /HOT DEAL SECTION --> */}
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- section title --> */}
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Top selling</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active">
                      <a data-toggle="tab" href="#tab2">
                        Laptops
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2">
                        Smartphones
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2">
                        Cameras
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /section title --> */}
            {/* <!-- Products tab & slick --> */}
            {/* Pagination */}
            <div className="d-flex justify-content-start">
              <IoMdArrowDropleft
                size={40}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (topSellingPage > 1) {
                    setTopSellingPage(topSellingPage - 1);
                  }
                }}
              />
              {maxPageTopSelling.map((element) => {
                return (
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: element == topSellingPage ? "red" : "black",
                      cursor: "pointer",
                    }}
                    className="m-0 mx-3 d-flex align-self-center"
                    onClick={() => {
                      setTopSellingPage(element);
                    }}
                  >
                    {element}
                  </p>
                );
              })}
              <IoMdArrowDropright
                size={40}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (topSellingPage < maxPageTopSelling.length) {
                    setTopSellingPage(topSellingPage + 1);
                  }
                }}
              />
            </div>
            {/* Pagination */}

            <Row xs={0} md={4} className="g-4">
              {topSellingItem.map((element, index) => {
                return index >=
                  0 + (topSellingPage - 1) * itemPerTopSellingPage &&
                  index < topSellingPage * itemPerTopSellingPage ? (
                  <>
                    {/* <!-- product --> */}
                    <div className="col-md-3 col-xs-6">
                      <div className="product">
                        <div className="product-img">
                          <img src={""} alt="" />
                          {/* <div className="product-label">
                            <span className="sale">-30%</span>
                          </div> */}
                        </div>
                        <div className="product-body">
                          <p className="product-category">
                            {element.category.category_name}
                          </p>
                          <h3 className="product-name">
                            <Link
                              to={`/product/${element.product_id}`}
                              onClick={() => {
                                window.scrollTo({ top: 0 });
                              }}
                            >
                              {element.product_name}
                            </Link>
                          </h3>
                          <h4 className="product-price">
                            Rp{" "}
                            {Intl.NumberFormat("id-ID", {}).format(
                              element.product_price
                            )}
                          </h4>
                          <div className="product-rating"></div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <i className="fa fa-heart-o"></i>
                              <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                              <i className="fa fa-exchange"></i>
                              <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                              <i className="fa fa-eye"></i>
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button
                            className="add-to-cart-btn"
                            onClick={() => {
                              addCart(element.product_id, 1).then(() => {
                                setRefreshCart(!refreshCart);
                              });
                            }}
                          >
                            <i className="fa fa-shopping-cart"></i> add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /product --> */}
                  </>
                ) : (
                  <></>
                );
              })}
            </Row>

            {/* <!-- /Products tab & slick --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          <div></div>
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-3" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-3">
                <div>
                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product07} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product08} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product09} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- product widget --> */}
                </div>

                <div>
                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product01} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product02} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
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
                    </div>
                  </div>
                  {/* <!-- product widget --> */}
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-4" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-4">
                <div>
                  {/* <!-- product widget --> */}
                  <div className="product-widget">
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
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product05} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product06} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- product widget --> */}
                </div>

                <div>
                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product06} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product08} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product09} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- product widget --> */}
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm visible-xs"></div>

            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-5" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-5">
                <div>
                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product01} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product01} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
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
                    </div>
                  </div>
                  {/* <!-- product widget --> */}
                </div>

                <div>
                  {/* <!-- product widget --> */}
                  <div className="product-widget">
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
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product05} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- /product widget --> */}

                  {/* <!-- product widget --> */}
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={product06} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name">
                        <a href="#">product name goes here</a>
                      </h3>
                      <h4 className="product-price">
                        $980.00 <del className="product-old-price">$990.00</del>
                      </h4>
                    </div>
                  </div>
                  {/* <!-- product widget --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
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
      <Footer></Footer>
    </>
  );
};
