import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const { user,logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/shipping">Shipping</Link>
                {
                    user?.uid ?
                        <button className='logout' onClick={logOut}>Log Out</button>
                        :

                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
               
            </div>
        </nav>
    );
};

export default Header;