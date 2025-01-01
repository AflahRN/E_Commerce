import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Breadcrumb = ({ path }) => {
  const [pathList, setPathList] = useState([]);
  useEffect(() => {
    if (path) {
      setPathList(path);
    }
  }, [path]);

  const navigate = useNavigate();
  return (
    <>
      {/* <!-- BREADCRUMB --> */}
      <div id="breadcrumb" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                <li>
                  <a href="/dashboard">Home</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate({ pathname: "/store", search: "" });
                    }}
                  >
                    Home
                  </a>
                </li>
                {pathList.map((element, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{element}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /BREADCRUMB --> */}
    </>
  );
};
