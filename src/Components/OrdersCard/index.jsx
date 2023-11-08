import { totalPrice } from "../../Utils";
import { BsFillCalendarEventFill, BsFillCartFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoMdArrowForward } from "react-icons/io";
import "./OrdersCard.scss";


const OrdersCard = props => {
    const { totalPrice, totalProducts, date } = props;


    return(
        <div className="containOrdersCard">
            <div className="ordersRecorder">
                <div>
                    <BsFillCalendarEventFill className="icoOrders"/>
                    <p>{date}</p>
                </div>
                <div>
                    <BsFillCartFill className="icoOrders"/>
                    <p>{totalProducts}</p>
                </div>
                <div>
                    <HiCurrencyDollar className="icoOrders"/>
                    <p>{totalPrice}</p>
                </div>
            </div>
            <div className="ordersBack">
                <IoMdArrowForward className="icoOrders"/>
            </div>
        </div>
    );
};

export default OrdersCard;