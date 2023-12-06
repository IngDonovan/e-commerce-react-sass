import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EcomContext } from "../../Context";
import { FiShoppingCart } from "react-icons/fi";
import { FcMenu } from "react-icons/fc";

import "./NavBar.scss";

const NavBar = () => {
  const { 
    setSearchByCategory,
    count,
    isProductDetailOpen,
    toggleProductDetail,
    toggleCheckoutSideMenu,
    isMenuMbOpen,
    toggleMenuMb,
    setSignOut,
  } = useContext(EcomContext);

  const onCheckoutSideMenu = () =>{
    toggleCheckoutSideMenu();
    if (isProductDetailOpen) toggleProductDetail();
  };

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    setSignOut(true);
  }

  return (
    <header>
      <nav>
        <div>
          <span className="menuMb">
            <FcMenu className="menuMbIco" 
              onClick={toggleMenuMb}
              />
          </span>
          <span>
            <NavLink
              to="/"
              className="logo"
              onClick={() => setSearchByCategory("")}
            >
              E-ComPage
            </NavLink>
          </span>
          <ul className="categories">
            <li>
              <NavLink
                to="/"
                className="linkClass"
                onClick={() => setSearchByCategory("")}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothes"
                className="linkClass"
                onClick={() => setSearchByCategory("cloth")}
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronics"
                className="linkClass"
                onClick={() => setSearchByCategory("elec")}
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Jewelery"
                className="linkClass"
                onClick={() => setSearchByCategory("jewe")}
              >
                Jewelery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                className="linkClass"
                onClick={() => setSearchByCategory("toys")}
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/others"
                className="linkClass"
                onClick={() => setSearchByCategory("others")}
              >
                Others
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="myAccount">
            <li>email@gmail.com</li>
            <li>
              <NavLink to="/my-orders" className="linkClass">
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-account" className="linkClass">
                My Account
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/sign-in" className="linkClass"
                onClick={handleSignOut}
              >
                Sign Out
              </NavLink>
            </li>
            <li className="liShopCar">
              <FiShoppingCart className="shopCar" 
              onClick={onCheckoutSideMenu}
              />
              <p>
                {count}
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={isMenuMbOpen ? "navMb" : "hidden"}>
        <ul className="categoriesMb">
          <li>
            <NavLink
              to="/"
              className="linkClass"
              onClick={() => setSearchByCategory("")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              className="linkClass"
              onClick={() => setSearchByCategory("cloth")}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              className="linkClass"
              onClick={() => setSearchByCategory("elec")}
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Jewelery"
              className="linkClass"
              onClick={() => setSearchByCategory("jewe")}
            >
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className="linkClass"
              onClick={() => setSearchByCategory("toys")}
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/others"
              className="linkClass"
              onClick={() => setSearchByCategory("others")}
            >
              Others
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
