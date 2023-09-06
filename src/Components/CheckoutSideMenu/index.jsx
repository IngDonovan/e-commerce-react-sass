import { useContext } from 'react';
import { EcomContext } from '../../Context';
import { AiOutlineClose } from 'react-icons/Ai';
import './CheckoutSideMenu.sass'

const CheckoutSideMenu = () => {
  const { 
    isCheckoutSideMenuOpen,
  } = useContext(EcomContext);


  return (
    <aside className={isCheckoutSideMenuOpen ? "detailAside" : "hidden"}>
      <div className="detailHeader">
        <h2>Detail</h2>
        <span 
        className="closeIcoSpan" 
        // onClick={toggleProductDetail}
        >
          <AiOutlineClose className="xIco" />
        </span>
      </div>
      <div className="detailContent">
        <figure className="">
          <img
            className=""
            // src={productToShow.image}
            // alt={productToShow.title}
          />
        </figure>
        <div className="">
          <p className="dtPrice">$price</p>
          <span className="dtTitle">Title</span>
          <span className="dtDescription">description</span>
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
