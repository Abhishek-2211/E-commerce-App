import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import Navbar from "./Navbar.jsx";
import CartItems from "./CartItems.jsx";

import Slider from "./Slider.jsx";
import Cards from "./Cards.jsx";
import ProductDetails from "./ProductDetails.jsx";
import SearchProduct from "./SearchProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="appContainer">
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" index element={<Cards />} />
              <Route path="/CartItems" exact element={<CartItems />} />
              <Route
                path="/ProductDetails"
                exact
                element={<ProductDetails />}
              />
              <Route path="/SearchProduct" exact element={<SearchProduct />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
