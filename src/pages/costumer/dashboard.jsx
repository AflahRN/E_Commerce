import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/fonts/fontawesome-webfont.ttf";
import "../../assets/fonts/FontAwesome.otf";
import "../../assets/fonts/slick.ttf";
import "../../assets/css/style.css";

// Bisa dihapus
import product01 from "../../assets/images/product01.png";
import product02 from "../../assets/images/product02.png";
import product03 from "../../assets/images/product03.png";
import product04 from "../../assets/images/product04.png";
import product05 from "../../assets/images/product05.png";
import product06 from "../../assets/images/product06.png";
import product07 from "../../assets/images/product07.png";
import product08 from "../../assets/images/product08.png";
import product09 from "../../assets/images/product09.png";
import shop01 from "../../assets/images/shop01.png";
import shop02 from "../../assets/images/shop02.png";
import shop03 from "../../assets/images/shop03.png";
import { getProduct } from "../../controller/productController";
import { Link } from "react-router-dom";
import { addCart } from "../../controller/cartController";

export const Dashboard = () => {
  const [topSellingPage, setTopSellingPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const [refreshCart, setRefreshCart] = useState(false);

  const [product, setProduct] = useState([]);

  const RefreshData = () => {
    getProduct().then((response) => setProduct(response));
  };

  useEffect(() => {
    RefreshData();
  }, []);

  const [maxPageTopSelling, setMaxPageTopSelling] = useState([]);
  useEffect(() => {
    const loopMaxPageTopSelling = [];
    for (let i = 0; i < product.length / productPerPage; i++) {
      loopMaxPageTopSelling.push(i + 1);
    }
    setMaxPageTopSelling(loopMaxPageTopSelling);
  }, [product]);

  console.log(product);
  return (
    <>
      <Header refreshChart={refreshCart} />
      <Navbar />
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
                <a className="primary-btn cta-btn" href="/store">
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
              {product.map((element, index) => {
                return index >= 0 + (topSellingPage - 1) * productPerPage &&
                  index < topSellingPage * productPerPage ? (
                  <>
                    {/* <!-- product --> */}
                    <div className="col-md-3 col-xs-6">
                      <div className="product">
                        <div className="product-img h-[342px] p-3 grid items-center">
                          <img
                            src={`http://localhost:3000/image/${element.product_image}`}
                            alt=""
                          />
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
      <Footer></Footer>
    </>
  );
};
