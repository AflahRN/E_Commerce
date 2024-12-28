import "../assets/css/slick-theme.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import "../assets/css/index.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/nouislider.min.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "rc-tooltip";

// Bisa dihapus
import "../assets/fonts/fontawesome-webfont.ttf";
import "../assets/fonts/FontAwesome.otf";
import "../assets/fonts/slick.ttf";
import logo from "../assets/images/logo.png";
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
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export const Index = () => {
  const [topSellingPage, setTopSellingPage] = useState(1);
  const [itemPerTopSellingPage, setItemPerTopSellingPage] = useState(8);

  //   Data dummy
  const topSellingItem = [
    {
      image: product01,
      name: "Laptop",
      price: 5500000,
    },
    {
      image: product02,
      name: "Headphone",
      price: 250000,
    },
    {
      image: product03,
      name: "Smartphone",
      price: 3000000,
    },
    {
      image: product04,
      name: "Smartwatch",
      price: 1500000,
    },
    {
      image: product05,
      name: "Keyboard",
      price: 500000,
    },
    {
      image: product06,
      name: "Mouse",
      price: 200000,
    },
    {
      image: product07,
      name: "Monitor",
      price: 2000000,
    },
    {
      image: product08,
      name: "Speaker",
      price: 750000,
    },
    {
      image: product09,
      name: "Printer",
      price: 1200000,
    },
    {
      image: product01,
      name: "Tablet",
      price: 2500000,
    },
  ];

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
      {/* <!-- HEADER --> */}
      <header>
        {/* <!-- TOP HEADER --> */}
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left m-0">
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i> +021-95-51-84
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o"></i> email@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right m-0">
              <li>
                <a href="#">
                  <i className="fa fa-dollar"></i> USD
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user-o"></i> My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /TOP HEADER --> */}

        {/* <!-- MAIN HEADER --> */}
        <div id="header" className="py-10">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- LOGO --> */}
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="#" className="logo">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              {/* <!-- /LOGO --> */}

              {/* <!-- SEARCH BAR --> */}
              <div className="col-md-6">
                <div className="header-search">
                  <form className="d-flex align-items-center">
                    <select className="input-select m-0">
                      <option value="0">All Categories</option>
                      <option value="1">Category 01</option>
                      <option value="1">Category 02</option>
                    </select>
                    <input className="input" placeholder="Search here" />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>
              {/* <!-- /SEARCH BAR --> */}

              {/* <!-- ACCOUNT --> */}
              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  {/* <!-- Wishlist --> */}
                  <div>
                    <a href="#">
                      <i className="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                      <div className="qty">2</div>
                    </a>
                  </div>
                  {/* <!-- /Wishlist --> */}

                  {/* <!-- Cart --> */}
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src={product01} alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">1x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src={product02} alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">3x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">
                          Checkout <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Cart --> */}

                  {/* <!-- Menu Toogle --> */}
                  <div className="menu-toggle">
                    <a href="#">
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                  {/* <!-- /Menu Toogle --> */}
                </div>
              </div>
              {/* <!-- /ACCOUNT --> */}
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- /MAIN HEADER --> */}
      </header>
      {/* <!-- /HEADER --> */}

      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- responsive-nav --> */}
          <div id="responsive-nav">
            {/* <!-- NAV --> */}
            <ul className="main-nav nav navbar-nav flex flex-row navbar-text m-0">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Hot Deals</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
            {/* <!-- /NAV --> */}
          </div>
          {/* <!-- /responsive-nav --> */}
        </div>
        {/* <!-- /container --> */}
      </nav>
      {/* <!-- /NAVIGATION --> */}
      {/* <!-- Products tab & slick --> */}
      <Carousel
        style={{ backgroundColor: "#d10024" }}
        pause="hover"
        interval={5000}
      >
        {[1].map((element) => {
          return (
            <Carousel.Item style={{ textAlign: "center" }}>
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
                  console.log(topSellingPage);
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
                  console.log(topSellingPage);
                }}
              />
            </div>
            {/* Pagination */}

            <Row xs={0} md={4} className="g-4">
              {topSellingItem.map((element, index) => {
                return index >=
                  0 + (topSellingPage - 1) * itemPerTopSellingPage &&
                  index < topSellingPage * itemPerTopSellingPage ? (
                  <Col key={index}>
                    <Card className="m-3 p-3 itemCard">
                      <Card.Img
                        variant="top"
                        src={element.image}
                        sizes="100vh"
                      />
                      <Card.Body>
                        <p
                          className="m-0 text-center"
                          style={{
                            color: "#8d99ae",
                            fontSize: 18,
                          }}
                        >
                          Category
                        </p>
                        <h3 className="m-0 text-center">
                          <a
                            style={{
                              fontWeight: "bold",
                              color: "#2b2d42",
                              fontSize: 20,
                            }}
                          >
                            {element.name}
                          </a>
                        </h3>
                        <h4
                          className="text-center"
                          style={{
                            color: "#d10024",
                            fontWeight: "bold",
                            fontSize: 20,
                          }}
                        >
                          Rp {Intl.NumberFormat("id-ID").format(element.price)}
                        </h4>
                        <div className="product-rating text-center divider">
                          <i
                            className="fa fa-star"
                            style={{ color: "red" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ color: "red" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ color: "red" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ color: "red" }}
                          ></i>
                          <i
                            className="fa fa-star"
                            style={{ color: "red" }}
                          ></i>
                        </div>
                        <div className="product-btns text-center mt-4 d-flex justify-content-center">
                          <Tooltip
                            placement="top"
                            styles={{ body: { backgroundColor: "#1e1f29" } }}
                            trigger={["hover"]}
                            motion={{
                              motionName: "motion-tooltip",
                            }}
                            overlay={
                              <span
                                style={{
                                  color: "white",
                                  fontSize: 15,
                                }}
                              >
                                Add to wishlist
                              </span>
                            }
                          >
                            <i
                              className="fa fa-heart-o mx-2 card-icon"
                              style={{ cursor: "pointer", fontSize: 20 }}
                              onClick={() => console.log("A")}
                            />
                          </Tooltip>
                          <Tooltip
                            placement="top"
                            styles={{ body: { backgroundColor: "#1e1f29" } }}
                            trigger={["hover"]}
                            motion={{
                              motionName: "motion-tooltip",
                            }}
                            overlay={
                              <span
                                style={{
                                  color: "white",
                                  fontSize: 15,
                                }}
                              >
                                Add to wishlist
                              </span>
                            }
                          >
                            <i
                              className="fa fa-eye mx-2 card-icon"
                              style={{ cursor: "pointer", fontSize: 20 }}
                              onClick={() => console.log("A")}
                            ></i>
                          </Tooltip>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
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

      {/* <!-- FOOTER --> */}
      <footer id="footer">
        {/* <!-- top footer --> */}
        <div className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>
                  <ul className="footer-links">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker"></i>1734 Stonecoal Road
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>+021-95-51-84
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o"></i>email@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Hot deals</a>
                    </li>
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">Smartphones</a>
                    </li>
                    <li>
                      <a href="#">Cameras</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="clearfix visible-xs"></div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Information</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Orders and Returns</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Service</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">View Cart</a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /top footer --> */}

        {/* <!-- bottom footer --> */}
        <div id="bottom-footer" className="section">
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li>
                    <a href="#">
                      <i className="fa fa-cc-visa"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-credit-card"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cc-paypal"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cc-mastercard"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cc-discover"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cc-amex"></i>
                    </a>
                  </li>
                </ul>
                <span className="copyright">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </span>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /bottom footer --> */}
      </footer>
      {/* <!-- /FOOTER --> */}

      {/* <!-- jQuery Plugins --> */}
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/nouislider.min.js"></script>
      <script src="js/jquery.zoom.min.js"></script>
      <script src="js/main.js"></script>
    </>
  );
};
