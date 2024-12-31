import { Navbar } from "../components/navbar";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { getProduct } from "../../controller/productController";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { addCart } from "../../controller/cartController";
import { Breadcrumb } from "../components/breadcrumb";
import { getCategory } from "../../controller/categoryController";

export const Store = () => {
  const [product, setProduct] = useState([]);
  const [refreshCart, setRefreshCart] = useState(false);
  const [category, setCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const searchCategory = searchParams.get("category") || "";

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (searchText) => {
    const params = new URLSearchParams(location.search);
    params.set("category", searchText);

    navigate({
      pathname: "/store",
      search: params.toString(),
    });
  };

  useEffect(() => {
    refresh();
  }, [search, searchCategory]);

  const refresh = () => {
    getProduct()
      .then((response) =>
        response.filter(
          (element) =>
            element.product_name.toLowerCase().includes(search.toLowerCase()) &&
            element.category_id.includes(searchCategory)
        )
      )
      .then((filter) => setProduct(filter));
    getCategory().then((response) => setCategory(response));
  };

  return (
    <>
      <Header refreshChart={refreshCart} />
      <Navbar />
      <Breadcrumb path={["All Categories", search]} />

      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- ASIDE --> */}
            <div id="aside" className="col-md-3">
              {/* <!-- aside Widget --> */}
              <div className="aside">
                <h3 className="aside-title">Categories</h3>
                <div className="checkbox-filter">
                  {category.map((element, index) => {
                    return (
                      <div className="input-checkbox" key={index}>
                        <input
                          type="radio"
                          name="category"
                          value={element.category_id}
                          id={element.category_id}
                          onChange={(e) => {
                            handleNavigate(e.target.value);
                            // navigate({
                            //   pathname: "/store",
                            //   search: `?category=${e.target.value}`,
                            // });
                            refresh();
                          }}
                        />
                        <label htmlFor={element.category_id}>
                          <span></span>
                          {element.category_name}
                          <small>
                            {" "}
                            (
                            {
                              product.filter(
                                (data) =>
                                  data.category_id === element.category_id
                              ).length
                            }
                            )
                          </small>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!-- /aside Widget --> */}
            </div>
            {/* <!-- /ASIDE --> */}

            {/* <!-- STORE --> */}
            <div id="store" className="col-md-9">
              {/* <!-- store top filter --> */}
              <div className="store-filter clearfix">
                <div className="store-sort">
                  <label>
                    Sort By:
                    <select className="input-select">
                      <option value="0">Popular</option>
                      <option value="1">Position</option>
                    </select>
                  </label>

                  <label>
                    Show:
                    <select className="input-select">
                      <option value="0">20</option>
                      <option value="1">50</option>
                    </select>
                  </label>
                </div>
                <ul className="store-grid">
                  <li className="active">
                    <i className="fa fa-th"></i>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-th-list"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /store top filter --> */}

              {/* <!-- store products --> */}
              <div className="row">
                {product.map((element, index) => {
                  return (
                    <div className="col-md-4 col-xs-6" key={index}>
                      <div className="product">
                        <div className="product-img h-[280px] grid items-center p-3">
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
                            {Intl.NumberFormat("id-ID").format(
                              element.product_price
                            )}
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
                  );
                })}
              </div>
              {/* <!-- /store products --> */}

              {/* <!-- store bottom filter --> */}
              <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                <ul className="store-pagination">
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
              {/* <!-- /store bottom filter --> */}
            </div>
            {/* <!-- /STORE --> */}
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

      <Footer />
    </>
  );
};
