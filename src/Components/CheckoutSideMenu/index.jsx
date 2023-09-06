import './CheckoutSidemenu.sass'

const CheckoutSideMenu = () => {
  return (
    <aside className="detailAside">
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
