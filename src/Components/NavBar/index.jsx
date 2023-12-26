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
    signOut,
    setSignOut,
    account,
  } = useContext(EcomContext);

  const onCheckoutSideMenu = () =>{
    toggleCheckoutSideMenu();
    if (isProductDetailOpen) toggleProductDetail();
  };
  //Sign Out
  const signOutSesion = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOutSesion);
  const isUserSignOut = signOut || parsedSignOut;
  //Account
  const accountInLcl = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountInLcl);
  //Has ann account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    setSignOut(true);
  }

  const renderView = () => {

  if (hasUserAnAccount && !isUserSignOut) {
    return (
      <div>
        <ul className="myAccount">
          <li>{parsedAccount?.email}</li>
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
            <NavLink to="/sign-in" 
              className="linkClass"
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
    );
  } else {
    return (
      <div>
      <ul>
        <li>
          <NavLink to="/sign-in" 
            className="linkClass"
            onClick={handleSignOut}
          >
            Sign In
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
    );
  }
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
              to={`${isUserSignOut ? '/sign-in' : '/'}`}
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
        {renderView()}
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
