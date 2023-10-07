import { useContext } from 'react';
import { EcomContext } from '../../Context';
import { AiOutlineClose } from 'react-icons/Ai';
import OrderCard from '../OrderCard';
import { totalPrice } from "../../Utils";
import './CheckoutSideMenu.scss';

const CheckoutSideMenu = () => {
  const { 
    isCheckoutSideMenuOpen,
    toggleCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setCount,
  } = useContext(EcomContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCount(cartProducts.length - 1);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}.${
      currentDate.getMonth() + 1
    }.${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    const dateTime = `${formattedDate} ${formattedTime}`;

    const orderToAdd = {
      date: dateTime,
      products: cartProducts,
      totalProducts: cartProducts.quantity,
      totalPrice: totalPrice(cartProducts),
    }
    console.log(orderToAdd);
  };

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
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="myOrderFooter">
        <span>
          <p>Total</p>
          <p>${totalPrice(cartProducts)}</p>
        </span>
        <button>
          Confirm
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
