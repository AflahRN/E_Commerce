import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import product01 from "../assets/images/product01.png";
import product02 from "../assets/images/product02.png";
import product03 from "../assets/images/product03.png";
import { useEffect, useState } from "react";
import { getProduct } from "../controller/productController";
import { Link, useSearchParams } from "react-router-dom";
import { addCart } from "../controller/cartController";
import { Breadcrumb } from "./components/breadcrumb";
import { getCategory } from "../controller/categoryController";

export const Store = () => {
  const [product, setProduct] = useState([]);
  const [refreshCart, setRefreshCart] = useState(false);
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    refresh();
  }, [search]);

  const refresh = () => {
    getProduct()
      .then((response) =>
        response.filter((element) =>
          element.product_name.toLowerCase().includes(search.toLowerCase())
        )
      )
      .then((value) => setProduct(value));
    getCategory().then((response) => setCategory(response));
  };
  return (
    <>
      <Header refreshChart={refreshCart} />
      <Navbar />
      <Breadcrumb path={["All Categories", search]} />

      {/* <!-- SECTION --> */}
      <div class="section">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            {/* <!-- ASIDE --> */}
            <div id="aside" class="col-md-3">
              {/* <!-- aside Widget --> */}
              <div class="aside">
                <h3 class="aside-title">Categories</h3>
                <div class="checkbox-filter">
                  {category.map((element, index) => {
                    return (
                      <>
                        <div class="input-checkbox">
                          <input
                            type="checkbox"
                            value={element.category_id}
                            id={element.category_id}
                            onChange={(e) => {
                              console.log(e.target.value);
                            }}
                          />
                          <label for={element.category_id}>
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
                      </>
                    );
                  })}
                </div>
              </div>
              {/* <!-- /aside Widget --> */}

              {/* <!-- aside Widget --> */}
              <div class="aside">
                <h3 class="aside-title">Price</h3>
                <div class="price-filter">
                  <div id="price-slider"></div>
                  <div class="input-number price-min">
                    <input id="price-min" type="number" />
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
                  </div>
                  <span>-</span>
                  <div class="input-number price-max">
                    <input id="price-max" type="number" />
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
                  </div>
                </div>
              </div>
              {/* <!-- /aside Widget --> */}

              {/* <!-- aside Widget --> */}
              <div class="aside">
                <h3 class="aside-title">Brand</h3>
                <div class="checkbox-filter">
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-1" />
                    <label for="brand-1">
                      <span></span>
                      SAMSUNG
                      <small>(578)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-2" />
                    <label for="brand-2">
                      <span></span>
                      LG
                      <small>(125)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-3" />
                    <label for="brand-3">
                      <span></span>
                      SONY
                      <small>(755)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-4" />
                    <label for="brand-4">
                      <span></span>
                      SAMSUNG
                      <small>(578)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-5" />
                    <label for="brand-5">
                      <span></span>
                      LG
                      <small>(125)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-6" />
                    <label for="brand-6">
                      <span></span>
                      SONY
                      <small>(755)</small>
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- /aside Widget --> */}

              {/* <!-- aside Widget --> */}
              <div class="aside">
                <h3 class="aside-title">Top selling</h3>
                <div class="product-widget">
                  <div class="product-img">
                    <img src={product01} alt="" />
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 class="product-price">
                      $980.00 <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>

                <div class="product-widget">
                  <div class="product-img">
                    <img src={product02} alt="" />
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 class="product-price">
                      $980.00 <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>

                <div class="product-widget">
                  <div class="product-img">
                    <img src={product03} alt="" />
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 class="product-price">
                      $980.00 <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
              </div>
              {/* <!-- /aside Widget --> */}
            </div>
            {/* <!-- /ASIDE --> */}

            {/* <!-- STORE --> */}
            <div id="store" class="col-md-9">
              {/* <!-- store top filter --> */}
              <div class="store-filter clearfix">
                <div class="store-sort">
                  <label>
                    Sort By:
                    <select class="input-select">
                      <option value="0">Popular</option>
                      <option value="1">Position</option>
                    </select>
                  </label>

                  <label>
                    Show:
                    <select class="input-select">
                      <option value="0">20</option>
                      <option value="1">50</option>
                    </select>
                  </label>
                </div>
                <ul class="store-grid">
                  <li class="active">
                    <i class="fa fa-th"></i>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-th-list"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /store top filter --> */}

              {/* <!-- store products --> */}
              <div class="row">
                {product.map((element, index) => {
                  console.log(element);
                  return (
                    <>
                      {/* <!-- product --> */}
                      <div class="col-md-4 col-xs-6">
                        <div class="product">
                          <div class="product-img">
                            <img src={product01} alt="" />
                            <div class="product-label">
                              <span class="sale">-30%</span>
                              <span class="new">NEW</span>
                            </div>
                          </div>
                          <div class="product-body">
                            <p class="product-category">
                              {element.category.category_name}
                            </p>
                            <h3 class="product-name">
                              <Link
                                to={`/product/${element.product_id}`}
                                onClick={() => {
                                  window.scrollTo({ top: 0 });
                                }}
                              >
                                {element.product_name}
                              </Link>
                            </h3>
                            <h4 class="product-price">
                              Rp{" "}
                              {Intl.NumberFormat("id-ID").format(
                                element.product_price
                              )}
                            </h4>
                            <div class="product-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <div class="product-btns">
                              <button class="add-to-wishlist">
                                <i class="fa fa-heart-o"></i>
                                <span class="tooltipp">add to wishlist</span>
                              </button>
                              <button class="add-to-compare">
                                <i class="fa fa-exchange"></i>
                                <span class="tooltipp">add to compare</span>
                              </button>
                              <button class="quick-view">
                                <i class="fa fa-eye"></i>
                                <span class="tooltipp">quick view</span>
                              </button>
                            </div>
                          </div>
                          <div class="add-to-cart">
                            <button
                              class="add-to-cart-btn"
                              onClick={() => {
                                addCart(element.product_id, 1).then(() => {
                                  setRefreshCart(!refreshCart);
                                });
                              }}
                            >
                              <i class="fa fa-shopping-cart"></i> add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /product --> */}
                    </>
                  );
                })}
              </div>
              {/* <!-- /store products --> */}

              {/* <!-- store bottom filter --> */}
              <div class="store-filter clearfix">
                <span class="store-qty">Showing 20-100 products</span>
                <ul class="store-pagination">
                  <li class="active">1</li>
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
                      <i class="fa fa-angle-right"></i>
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
      <div id="newsletter" class="section">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            <div class="col-md-12">
              <div class="newsletter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
                <form>
                  <input
                    class="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button class="newsletter-btn">
                    <i class="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <ul class="newsletter-follow">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
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
