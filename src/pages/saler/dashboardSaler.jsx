import { useEffect, useState } from "react";
import "../../assets/css/tailwind.output.css";
import { SalerHeader } from "../components/salerHeader";
import { SalerNavbar } from "../components/salerNavbar";
import { DeleteProduct, getProduct } from "../../controller/productController";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const DashboardSaler = () => {
  const [product, setProduct] = useState([]);
  const userCredential = Cookies.get();
  const navigate = useNavigate();

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

  return (
    <>
      {/* Modal */}
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SalerNavbar page={"dashboard"} />
        <div className="flex flex-col flex-1 w-full">
          <SalerHeader />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  Product
                </h2>
                <button
                  className="bg-[#7e3af2] text-white font-semibold h-min px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  onClick={() => {
                    navigate("/saler/form", {
                      state: { type: "add" },
                    });
                  }}
                >
                  Add product
                </button>
              </div>

              {/* <!-- With actions --> */}
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr
                        className="tracking-wide uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                        style={{ fontSize: 12, fontWeight: 600 }}
                      >
                        <th className="px-4 py-3">Nama Produk</th>
                        <th className="px-4 py-3">Deskripsi</th>
                        <th className="px-4 py-3">Harga</th>
                        <th className="px-4 py-3">Stok</th>
                        <th className="px-4 py-3">Terjual</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      {product.map((element, index) => {
                        return (
                          <tr
                            className="dark:text-gray-400"
                            style={{ fontSize: 15, fontWeight: 600 }}
                            key={index}
                          >
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                {/* <!-- Avatar with inset shadow --> */}
                                <div className="relative mr-3 rounded-full md:block w-[50px]">
                                  <img
                                    className="object-cover w-full h-full rounded-full"
                                    src={`http://localhost:3000/image/${element.product_image}`}
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
                                    {element.product_name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-lg lg max-w-[200px] overflow-hidden text-wrap text-ellipsis">
                              {element.product_description}
                            </td>
                            <td className="px-4 py-3 text-lg">
                              Rp{" "}
                              {Intl.NumberFormat("id-ID").format(
                                element.product_price
                              )}
                            </td>
                            <td className="px-4 py-3 text-xl">
                              {Intl.NumberFormat("id-ID").format(
                                element.product_stock
                              )}
                            </td>
                            <td className="px-4 py-3 text-xl">
                              {Intl.NumberFormat("id-ID").format(
                                element.product_sold
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-4 text-sm">
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Edit"
                                  onClick={() => {
                                    navigate("/saler/form", {
                                      state: {
                                        type: "edit",
                                        id: element.product_id,
                                      },
                                    });
                                  }}
                                >
                                  <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                  </svg>
                                </button>
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() => {
                                    DeleteProduct(element.product_id).then(() =>
                                      refresh()
                                    );
                                  }}
                                >
                                  <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="grid px-4 py-3 text-lg font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                  <span className="flex items-center col-span-3">
                    Showing 21-30 of 100
                  </span>
                  <span className="col-span-2"></span>
                  {/* <!-- Pagination --> */}
                  <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                      <ul className="inline-flex items-center text-xl">
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
