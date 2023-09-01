import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { EcomContext } from '../../Context';
import { FiShoppingCart } from 'react-icons/fi';
import './NavBar.scss';

const NavBar = () => {
    const {setSearchByCategory} = useContext(EcomContext);


    return(
        <header>
            <nav>
                <div>
                    <span>
                        <NavLink to='/'
                        className='logo'>
                            E-ComPage
                        </NavLink>
                    </span>
                    <ul className='categories'>
                        <li>
                            <NavLink to='/' 
                            className='linkClass'
                            onClick={() => setSearchByCategory('')}>
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/clothes' 
                            className='linkClass'
                            onClick={() => setSearchByCategory('cloth')}
                            >
                                Clothes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/electronics' 
                            className='linkClass'
                            onClick={() => setSearchByCategory('elec')}
                            >
                                Electronics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/furnitures' 
                            className='linkClass'
                            onClick={() => setSearchByCategory('furni')}
                            >
                                Furnitures
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/toys' 
                            className='linkClass'
                            onClick={() => setSearchByCategory('toys')}
                            >
                                Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/others' 
                            className='linkClass'
                            onClick={() => setSearchByCategory('others')}
                            >
                                Others
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='myAccount'>
                        <li>email@gmail.com</li>
                        <li>My Orders
                            <NavLink 
                            to='/my-orders' 
                            className='linkClass'
                            >
                                My Orders
                            </NavLink>
                        </li>
                        <li>My Account
                            <NavLink 
                            to='/my-account' 
                            className='linkClass'
                            >
                                My Account
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink 
                            to='/sign-in' 
                            className='linkClass'
                            >
                                Sign In
                            </NavLink>
                        </li>
                        <li 
                        className='liShopCar'>
                            <FiShoppingCart 
                            className='shopCar'/>
                            0
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;