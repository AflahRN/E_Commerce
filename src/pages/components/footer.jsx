import { useEffect, useState } from "react";
import "../../assets/css/slick-theme.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import dokuIcon from "../../assets/logo/doku-icon.png";
import { getCategory } from "../../controller/categoryController";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const refresh = () => {
    getCategory().then((response) => setCategory(response));
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      {/* <!-- FOOTER --> */}
      <footer id="footer">
        {/* <!-- top footer --> */}
        <div className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row ">
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
                    {category.map((element, index) => {
                      return (
                        <li key={index}>
                          <a
                            onClick={() => {
                              navigate({
                                pathname: "/store",
                                search: `?category=${element.category_id}`,
                              });
                              window.scrollTo({ top: 0 });
                            }}
                            href=""
                          >
                            {element.category_name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="clearfix visible-xs"></div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Service</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="/transaction">Track My Order</a>
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
                    <img src={dokuIcon} alt="" className="w-20" />
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
    </>
  );
};
