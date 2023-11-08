import { useContext } from "react";
import { Link } from "react-router-dom";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import "./MyOrders.scss";

const MyOrders = () => {
    const {
        order,
    } = useContext(EcomContext);

    return(
        <Layout>
            <div>
                <h1>MyOrders</h1>
            </div>
            <div className="listMyOrders">
                {
                    order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`} >
                    <OrdersCard 
                    date={order.date}
                    totalPrice={order.totalPrice} 
                    totalProducts={order.totalProducts} />
                    </Link>
                    ))
                }
            </div>

        </Layout>
    );
};

export default MyOrders;