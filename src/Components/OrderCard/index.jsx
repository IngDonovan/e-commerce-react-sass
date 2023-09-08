import "./OrderCard.scss";

const OrderCard = () => {
  return (
    <>
      <div className="orderContain">
        <figure className="orderContainImg">
          <img src="" alt="" />
        </figure>
        <div className="orderContainInfo">
          <span className="orderInfoTitle">title</span>
          <span>
            <span>
                icono 0
            </span>
            <p>$100.00</p>
          </span>
        </div>
        <div className="orderContainErase">
          <span>x</span>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
