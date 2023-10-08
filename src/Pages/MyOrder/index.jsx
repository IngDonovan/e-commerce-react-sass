import { useContext } from "react";
import { EcomContext } from "../../Context";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./MyOrder.scss"

const MyOrder = () => {
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
        </Layout>
    );
};

export default MyOrder;