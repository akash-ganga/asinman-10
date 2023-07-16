import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='nav'>
            <p>KONGKAL</p>
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/services'><button>Services</button></Link>
                {
                    user?.uid ? <Link onClick={logOut}><button>Logout</button></Link> :
                        <>
                            <Link to='/login'><button>Login</button></Link>
                            <Link to='/register'><button>Register</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;