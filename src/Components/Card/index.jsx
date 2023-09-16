import { useContext } from "react";
import { EcomContext } from "../../Context";
import { CgMathPlus } from "react-icons/Cg";
import "./Card.scss";

const Card = ({ data }) => {
    const { 
      count,
      setCount,
      isProductDetailOpen,
      toggleProductDetail,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      toggleCheckoutSideMenu,
    } = useContext(EcomContext);

const showProduct = (productDetail) => {
    // closeCheckoutSideMenu();
  if (isCheckoutSideMenuOpen) toggleCheckoutSideMenu();
  toggleProductDetail();
  setProductToShow(productDetail);
}
 
const addProductsToCart = (productData) => {
        
  setCount(count + 1);

  const existingProduct = cartProducts.find((product) => product.id === productData.id);

  if (existingProduct) {
      // Si el producto ya existe, aumenta la cantidad
      const updatedProduct = {
        ...existingProduct,
        quantity: (existingProduct.quantity || 1) + (productData.quantity || 1),
        
      };
      const updatedCartProducts = cartProducts.map((product) => {
        if (product.id === productData.id) {
          return updatedProduct;
        }
        return product;
      });
      
      setCartProducts(updatedCartProducts);
    } else {
      // Si el producto no existe, agrégalo al carrito
      setCartProducts([...cartProducts, productData]);
    }

  // setCartProducts([...cartProducts, productData]);
  // openCheckoutSideMenu();
  if (isProductDetailOpen) toggleProductDetail();
  if (!isCheckoutSideMenuOpen) toggleCheckoutSideMenu();

};

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
          onClick={() => addProductsToCart(data)}
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
