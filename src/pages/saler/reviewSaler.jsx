import { useEffect, useState } from "react";
import "../../assets/css/tailwind.output.css";
import { SalerHeader } from "../components/salerHeader";
import { SalerNavbar } from "../components/salerNavbar";
import Cookies from "js-cookie";
import { getReview, sendResponse } from "../../controller/reviewController";
import { getProduct } from "../../controller/productController";

export const ReviewSaler = () => {
  const [review, setReview] = useState([]);
  const [product, setProduct] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [reviewResponse, setReviewResponse] = useState();
  const userCredential = Cookies.get();

  const refresh = () => {
    getProduct()
      .then((response) =>
        response.filter((data) => data.account_id == userCredential.accountId)
      )
      .then((filter) => setProduct(filter));
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const filterList = [];
    const productFilter = [];
    getReview()
      .then((response) => {
        response.filter((data) => {
          product.map((element) => {
            if (element.product_id == data.product_id) {
              filterList.push(data);
              productFilter.push(element);
            }
          });
        });
      })
      .then(() => {
        setReview(filterList);
        setProductFilter(productFilter);
      });
  }, [product]);
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SalerNavbar />
        <div className="flex flex-col flex-1 w-full">
          <SalerHeader />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 mx-auto">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Product
              </h2>

              {/* <!-- With actions --> */}
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-lg font-bold center tracking-wide uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3 text-center">Produk</th>
                        <th className="px-4 py-3 text-center">Review</th>
                        <th className="px-4 py-3 text-center">Skor</th>
                        <th className="px-4 py-3 text-center">Response</th>
                        <th className="px-4 py-3 text-center">Send</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      {review.map((element, index) => {
                        return (
                          <tr
                            className="dark:text-gray-400"
                            style={{ fontSize: 15, fontWeight: 600 }}
                          >
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                {/* <!-- Avatar with inset shadow --> */}
                                <div className="relative mr-3 rounded-full md:block w-[8vh]">
                                  <img
                                    className="object-cover w-full h-full rounded-full"
                                    src={`http://localhost:3000/image/${productFilter[index].product_image}`}
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    className="absolute inset-0 rounded-full shadow-inner"
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p className="font-semibold text-xl">
                                    {productFilter[index].product_name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-lg lg max-w-[200px] overflow-hidden text-wrap text-ellipsis">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Tempora nobis explicabo tenetur
                              dolorem voluptatibus numquam aliquam, voluptatem
                              tempore ullam odit aspernatur, eveniet nihil
                              labore provident perspiciatis autem! Ratione, nemo
                              officiis.
                            </td>
                            <td className="px-4 py-3 text-xl text-center">
                              {element.review_skor}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <textarea
                                className="border border-gray-300 rounded-lg text-lg p-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                style={{ height: "auto" }}
                                placeholder="Type your message here..."
                                onChange={(e) => {
                                  setReviewResponse(e.target.value);
                                }}
                              ></textarea>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <button
                                onClick={() => {
                                  sendResponse(
                                    element.review_id,
                                    reviewResponse
                                  );
                                }}
                                className="bg-blue-500 text-xl text-white font-normal py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
                              >
                                Send Response
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                  <span className="flex items-center col-span-3">
                    Showing 21-30 of 100
                  </span>
                  <span className="col-span-2"></span>
                  {/* <!-- Pagination --> */}
                  <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                      <ul className="inline-flex items-center">
                        <li>
                          <button
                            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Previous"
                          >
                            <svg
                              className="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            1
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            2
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                            3
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            4
                          </button>
                        </li>
                        <li>
                          <span className="px-3 py-1">...</span>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            8
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            9
                          </button>
                        </li>
                        <li>
                          <button
                            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Next"
                          >
                            <svg
                              className="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
