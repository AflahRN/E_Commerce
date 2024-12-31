import "../../assets/css/slick-theme.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/nouislider.min.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import "../../assets/css/index.css";
import logo from "../../assets/images/logo.png";
import product01 from "../../assets/images/product01.png";
import { useEffect, useState } from "react";
import { deleteCart, getCart } from "../../controller/cartController";
import { generatePaymentUrl } from "../../controller/paymentController";
import { getUserdata } from "../../controller/userController";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ refreshChart }) => {
  const [cartDropdownActive, setCartDropdownActive] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [grossPayment, setGrossPayment] = useState(0);
  const [username, setUsername] = useState("");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const checkoutItem = [];

  const refresh = () => {
    getCart().then((response) => {
      setCartItem(response);
    });
  };

  useEffect(() => {
    refresh();
    getUserdata().then((response) => {
      setUsername(response.username);
    });
  }, []);

  useEffect(() => {
    refresh();
  }, [refreshChart]);

  useEffect(() => {
    let total = 0;
    cartItem.map((element) => {
      total += element.product.product_price * element.quantity;
    });
    setGrossPayment(total);
  }, [cartItem]);

  return (
    <>
      {/* <!-- HEADER --> */}
      <header>
        {/* <!-- TOP HEADER --> */}
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-right m-0">
              <li>
                <Link
                  to={"/"}
                  onClick={() => {
                    document.cookie =
                      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie =
                      "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  }}
                >
                  <i className="fa fa-user-o"></i> {username}
                </Link>
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
                  <a href="/dashboard" className="logo">
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
                    <input
                      className="input"
                      placeholder="Search here"
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          navigate({
                            pathname: "/store",
                            search: `?search=${searchText}`,
                          });
                        }
                      }}
                    />
                    <input
                      type="button"
                      className="search-btn"
                      value="Search"
                      onClick={() => {
                        navigate({
                          pathname: "/store",
                          search: `?search=${searchText}`,
                        });
                      }}
                    />
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
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCartDropdownActive(!cartDropdownActive);
                      }}
                    >
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">{cartItem.length}</div>
                    </a>
                    <div
                      className={
                        cartDropdownActive
                          ? "cart-dropdown cart-dropdown-open"
                          : "cart-dropdown"
                      }
                    >
                      <div className="cart-list">
                        {cartItem.map((element, index) => {
                          checkoutItem.push({
                            product_id: element.product_id,
                            quantity: element.quantity,
                          });
                          console.log(element);
                          return (
                            <div className="product-widget" key={index}>
                              <div className="product-img">
                                <img
                                  src={`http://localhost:3000/image/${element.product.product_image}`}
                                  alt=""
                                />
                              </div>
                              <div className="product-body">
                                <h3 className="product-name">
                                  <a href="#">{element.product.product_name}</a>
                                </h3>
                                <h4 className="product-price">
                                  <span className="qty">
                                    {element.quantity}x
                                  </span>
                                  Rp{" "}
                                  {Intl.NumberFormat("id-ID").format(
                                    element.product.product_price *
                                      element.quantity
                                  )}
                                </h4>
                              </div>
                              <button
                                className="delete"
                                onClick={() => {
                                  deleteCart(element.cart_id).then(() => {
                                    refresh();
                                  });
                                }}
                              >
                                <i className="fa fa-close"></i>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                      <div className="cart-summary">
                        <small>{cartItem.length} Item(s) selected</small>
                        <h5>
                          SUBTOTAL: Rp{" "}
                          {Intl.NumberFormat("id-ID").format(grossPayment)}
                        </h5>
                      </div>
                      <div className="cart-btns" style={{ cursor: "pointer" }}>
                        <a
                          onClick={() => {
                            generatePaymentUrl(checkoutItem);
                          }}
                        >
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
    </>
  );
};
