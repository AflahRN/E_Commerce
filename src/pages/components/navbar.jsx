import "../../assets/css/slick-theme.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/nouislider.min.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import "../../assets/css/index.css";

export const Navbar = () => {
  return (
    <>
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
    </>
  );
};
