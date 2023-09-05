import { useContext } from 'react';
import { EcomContext } from '../../Context';
import { AiOutlineClose } from "react-icons/Ai";
import './ProductDetail.scss';

const ProductDetail = () => {
    const { 
        isProductDetailOpen, 
        toggleProductDetail,
        productToShow,
    } = useContext(EcomContext);

    return(
        <aside className={isProductDetailOpen ? "detailAside" : "hidden"}>
            <div className='detailHeader'>
                <h2>
                    Detail
                </h2>
                <span className="closeIcoSpan"
                onClick={toggleProductDetail}>
                    <AiOutlineClose 
                    className='xIco'/>
                </span>
            </div>
            <div className='detailContent'>
                <figure className=''>
                    <img className=''
                    src={productToShow.image}
                    alt={productToShow.title}/>
                </figure>
                <div className=''>
                    <p className="dtPrice">${productToShow.price}</p>
                    <span className="dtTitle">
                        {productToShow.title}
                    </span>
                    <span className='dtDescription'>
                        {productToShow.description}
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default ProductDetail;