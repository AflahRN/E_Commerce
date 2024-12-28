import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "nouislider/dist/nouislider.min.css";
import { Index } from "./pages/index.jsx";
import { Product } from "./pages/product.jsx";
import { Store } from "./pages/store.jsx";
import { Checkout } from "./pages/checkout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Store />
  </StrictMode>
);
