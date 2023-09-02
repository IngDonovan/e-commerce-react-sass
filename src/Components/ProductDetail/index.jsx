import { useContext } from 'react';
import { EcomContext } from '../../Context';
import { AiOutlineClose } from "react-icons/Ai";
import './ProductDetail.scss';

const ProductDetail = () => {
    const { isProductDetailOpen, toggleProductDetail } = useContext(EcomContext);

    return(
        <aside className={isProductDetailOpen ? "detailAside" : "hidden"}>
            <div className='detailHeader'>
                <h2>
                    Detail
                </h2>
                <span className="cursor-pointer"
                onClick={toggleProductDetail}>
                    <AiOutlineClose 
                    className='xIco'/>
                </span>
            </div>
            <div className='detailContent'>
                <figure className=''>
                    <img className=''
                   />
                </figure>
                <div className=''>
                    <p className="dtPrice">$109.95</p>
                    <span className="dtTitle">
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                    </span>
                    <span className='dtDescription'>
                        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default ProductDetail;