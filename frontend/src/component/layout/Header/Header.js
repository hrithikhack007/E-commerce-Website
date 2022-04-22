import React, { useState } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import "./Header.css";
import { MdSearch, MdTranslate } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "search",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/search",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconElement: "profile",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleHidden = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="burgerIcon">
        <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen === false ? null : (
        <>
          <div className="navbarBox">
            <div className="navbarContainer">
              <img src={logo} alt="logo" />
              <ul className="leftList">
                <Link to="/">
                  <li onClick={toggleHidden}>Home</li>
                </Link>
                <Link to="/products">
                  <li onClick={toggleHidden}>Products</li>
                </Link>
                <Link to="/about">
                  <li onClick={toggleHidden}>About</li>
                </Link>
              </ul>
              <ul className="rightList">
                <Link to="/search">
                  <li onClick={toggleHidden}>
                    <MdSearch />
                  </li>
                </Link>
                <Link to="/cart">
                  <li onClick={toggleHidden}>
                    <MdShoppingCart />
                  </li>
                </Link>
                <Link to="/login">
                  <li onClick={toggleHidden}>
                    <MdAccountCircle />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
  // return <ReactNavbar {...options} />;
};
export default Header;
