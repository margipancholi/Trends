import React from "react";
import Hero from "../hero";
import Footer from "../Footer";

const MainWrapper = (props) => {
  return (
    <>
      <Hero />
      {props.children}
      <Footer />
    </>
  );
};

export default MainWrapper;
