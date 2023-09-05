import { useContext } from "react";
import { EcomContext } from "../../Context";
import { CgMathPlus } from "react-icons/Cg";
import "./Card.scss";

const Card = ({ data }) => {
    const { 
      toggleProductDetail,
      setProductToShow,
    } = useContext(EcomContext);

const showProduct = (productDetail) => {
    // closeCheckoutSideMenu();
    toggleProductDetail();
    setProductToShow(productDetail);
}
  return (
    <article className="">
      <figure className="">
        <span className="">{data.category}</span>
        <img
          className=""
          src={data.image}
          alt={data.title}
          onClick={() => showProduct(data)}
        />
        <button
          type="button"
          className=""
          // onClick={() => addProductsToCart(data)}
        >
          <CgMathPlus className="plusIco" />
        </button>
      </figure>
      <p className="">
        <span className="cardTitle">{data.title}</span>
        <span className="cardPrice">${data.price}</span>
      </p>
    </article>
  );
};

export default Card;
