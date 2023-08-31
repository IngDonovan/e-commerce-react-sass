import './NavBar.scss';

const NavBar = () => {
    return(
        <header>
            <nav>
                <div>
                    <span>E-ComPage</span>
                    <ul className='categories'>
                        <li>All</li>
                        <li>Clothes</li>
                        <li>Electronics</li>
                        <li>Furnitures</li>
                        <li>Toys</li>
                        <li>Others</li>
                    </ul>
                </div>
                <div>
                    <ul className='myAccount'>
                        <li>email@gmail.com</li>
                        <li>My Orders</li>
                        <li>My Account</li>
                    </ul>
                    <ul>
                        <li>Sign In</li>
                        <li>Car</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;