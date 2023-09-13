import { useContext } from 'react';
import { EcomContext } from '../../Context';
import { AiOutlineClose } from 'react-icons/Ai';
import OrderCard from '../OrderCard'
import './CheckoutSideMenu.scss'

const CheckoutSideMenu = () => {
  const { 
    isCheckoutSideMenuOpen,
    toggleCheckoutSideMenu,
    cartProducts,
  } = useContext(EcomContext);

  return (
    <aside className={isCheckoutSideMenuOpen ? "myOrdersMenu" : "hidden"}>
      <div className="myOrderHeader">
        <h2>My Order</h2>
        <span 
        className="closeIcoSpan" 
        onClick={toggleCheckoutSideMenu}
        >
          <AiOutlineClose className="xIco" />
        </span>
      </div>
      <div className='myOrderSection'>
      {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            quantity={product.quantity}
            title={product.title}
            imageUrl={product.image}
            price={product.price}

          />
        ))}
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
