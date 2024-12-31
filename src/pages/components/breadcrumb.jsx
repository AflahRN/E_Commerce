import { useEffect, useState } from "react";

export const Breadcrumb = ({ path }) => {
  const [pathList, setPathList] = useState([]);
  useEffect(() => {
    if (path) {
      setPathList(path);
    }
  }, [path]);
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
