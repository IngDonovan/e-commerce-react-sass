import './Card.scss';


const Card = ({data}) => {

    return(
        <article className="">
            <figure className="">
                <span className="">{data.category}</span>
                <img className=""
                src={data.image} 
                alt={data.title}
                // onClick={() => showProduct(data)}
                />
                <button type="button" className=""
                // onClick={() => addProductsToCart(data)}
                >
                    +{/* <PlusIcon className="h-6 w-6 text-white"/> */}
                </button>
            </figure>
            <p className="">
                <span className="cardTitle"> 
                    {data.title}
                </span>
                <span className="cardPrice">
                    ${data.price}
                </span>
            </p>
            
        </article>
    );
};

export default Card;