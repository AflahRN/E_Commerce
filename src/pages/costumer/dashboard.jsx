import "../../assets/fonts/fontawesome-webfont.ttf";
import "../../assets/fonts/FontAwesome.otf";
import "../../assets/fonts/slick.ttf";
import "../../assets/css/style.css";
import Row from "react-bootstrap/Row";
import shop03 from "../../assets/images/shop03.png";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { getProduct } from "../../controller/productController";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../../controller/cartController";
import { getCategory } from "../../controller/categoryController";

export const Dashboard = () => {
  const [topSellingPage, setTopSellingPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const [refreshCart, setRefreshCart] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const RefreshProduct = () => {
    getProduct()
      .then((response) =>
        response.filter((element) =>
          element.category.category_name.includes(categoryFilter)
        )
      )
      .then((filter) => setProduct(filter));
  };

  const RefreshCategory = () => {
    getCategory().then((response) => setCategory(response));
  };

  useEffect(() => {
    RefreshProduct();
    RefreshCategory();
  }, []);

  const [maxPageTopSelling, setMaxPageTopSelling] = useState([]);
  useEffect(() => {
    const loopMaxPageTopSelling = [];
    for (let i = 0; i < product.length / productPerPage; i++) {
      loopMaxPageTopSelling.push(i + 1);
    }
    setMaxPageTopSelling(loopMaxPageTopSelling);
  }, [product]);

  useEffect(() => {
    RefreshProduct();
  }, [categoryFilter]);

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
            {category.map((element, index) => {
              return (
                <div className="col-md-4 col-xs-6" key={index}>
                  <div className="shop">
                    <div className="shop-img">
                      <img src={shop03} alt="" />
                    </div>
                    <div className="shop-body">
                      <h3>
                        {element.category_name}
                        <br />
                        Collection
                      </h3>
                      <a
                        onClick={() => {
                          navigate({
                            pathname: "/store",
                            search: `?category=${element.category_id}`,
                          });
                        }}
                        className="cta-btn cursor-pointer"
                      >
                        Shop now <i className="fa fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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
                    {category.map((element) => {
                      return (
                        <li
                          className={`${
                            categoryFilter == element.category_name
                              ? "active"
                              : ""
                          } cursor-pointer`}
                        >
                          <a
                            data-toggle="tab"
                            onClick={() => {
                              setCategoryFilter(element.category_name);
                            }}
                          >
                            {element.category_name}
                          </a>
                        </li>
                      );
                    })}
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
              {maxPageTopSelling.map((element, index) => {
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
                    key={index}
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
                  <div className="col-md-3 col-xs-6" key={index}>
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
