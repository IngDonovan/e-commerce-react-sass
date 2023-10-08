import { useContext } from "react";
import { EcomContext } from "../../Context";
import Layout from "../../Components/Layout";

const MyOrders = () => {
    const {
        order,
    } = useContext(EcomContext);

    return(
        <Layout>
            <div>
                <h1>MyOrders</h1>
            </div>


        </Layout>
    );
};

export default MyOrders;