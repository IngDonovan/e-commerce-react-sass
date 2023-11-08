import { useContext } from "react";
import { EcomContext } from "../../Context";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { IoMdArrowRoundBack } from "react-icons/io";
import OrderCard from "../../Components/OrderCard";
import "./MyOrder.scss"

const MyOrder = () => {
    const {
        order,
    } = useContext(EcomContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (index === 'last') index = order?.length - 1;

    return(
        <Layout>
            <div className="containMyOrderTitle">
                <Link className="linkBack" 
                    to={'/my-orders'}>
                    <IoMdArrowRoundBack 
                    className="backIco"
                />
                </Link>
                <h1>MyOrder</h1>
            </div>
            <div className="containMyOrder">
                {
                    order?.[index]?.products.map((product) => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            quantity={product.quantity}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            
                            />
                    ))
                }
            </div>
        </Layout>
    );
};

export default MyOrder;