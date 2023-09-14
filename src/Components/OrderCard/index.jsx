import { AiOutlineClose } from 'react-icons/Ai';
import { FiShoppingCart } from "react-icons/fi";
import "./OrderCard.scss";

const OrderCard = (props) => {

  const { id, quantity, title, imageUrl, price, handleDelete } = props;

  const formatPrice = (price) => {
    return price.toFixed(2); // Limitar a dos decimales
  };
  
  return (
    <>
      <div className="orderContain">
        <figure className="orderContainImg">
          <img 
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div className="orderContainInfo">
          <span className="orderInfoTitle">
            {title}
          </span>
          <span>
            <span className='infoQuantity'>
              <FiShoppingCart className='icoCar'/>
                {quantity || 1}
            </span>
            <p>${formatPrice(price * (quantity || 1))}</p>
          </span>
        </div>
        <div className="orderContainErase">
          <span>
            <AiOutlineClose 
              className="xIco"
              onClick={() => handleDelete(id)}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
