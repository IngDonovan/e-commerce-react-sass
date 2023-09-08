import { useContext } from 'react';
import { EcomContext } from '../../Context';
import { AiOutlineClose } from 'react-icons/Ai';
import './CheckoutSideMenu.scss'

const CheckoutSideMenu = () => {
  const { 
    isCheckoutSideMenuOpen,
  } = useContext(EcomContext);


  return (
    <aside className={isCheckoutSideMenuOpen ? "myOrdersMenu" : "hidden"}>
      <div className="myOrderHeader">
        <h2>My Order</h2>
        <span 
        className="closeIcoSpan" 
        // onClick={toggleProductDetail}
        >
          <AiOutlineClose className="xIco" />
        </span>
      </div>
      <div className='myOrderSection'>
        content
      </div>
      <div className="myOrderFooter">
        <span>
          <p>Total</p>
          <p>$</p>
        </span>
        <button>Confirm</button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
