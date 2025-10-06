import React, { useContext, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import MyContext from "../../context/data/MyContext";

const Layout = ({ children }) => {
  const context = useContext(MyContext);
  const { mode } = context;

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "dark" ? "#282c34" : "#ffffff";
    document.body.style.color = mode === "dark" ? "white" : "black";
  }, [mode]);
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
