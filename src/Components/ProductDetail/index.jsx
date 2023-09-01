import './ProductDetail.scss';

const ProductDetail = () => {
    return(
        <aside>
            <div className='detailHeader'>
                <h2>
                    Detail
                </h2>
                <span className="cursor-pointer">
                    X
                </span>
            </div>
            <div className='detailContent overflow-y-scroll'>
                <figure className='px-6 h-1/2'>
                    <img className='w-full h-full rounded-lg object-contain '
                   />
                </figure>
                <div className='flex flex-col p-6'>
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