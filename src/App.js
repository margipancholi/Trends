import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainWrapper from "./components/WrapperComponent/MainWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <MainWrapper>
        <About />
      </MainWrapper>
    ),
  },
  {
    path: "/villas",
    element: (
      <>
      <Hero />
      <Products />
        <Footer />
        </>
    ),
  },
  {
    path: "/villas/product/:productId",
    element: <ProductDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
