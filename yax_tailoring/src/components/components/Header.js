import React, { useState } from 'react'
import "../style/Header.css"
import {
    Link
} from "react-router-dom";

const Header = () => {

    const [state, setSate] = useState("none");
    const [close, setClose] = useState("none");


    const OpenNav = () => {
        if (state === "none") {
            setSate("active")
            setClose("close")
        } else if (state === "active") {
            setSate("none")
            setClose("none")
        }
    }

    return (
        <header className="header">
            <nav className="navbar">

                {/* Mobile */}
                <div className={`hamburger ${close}`} onClick={OpenNav}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="logo-container">
                    <Link to='/' style={{ textDecoration: "none" }}>
                        YAX<span> Tailors</span>
                    </Link>
                </div>

                <ul className={`nav-items  ${state}`}>
                    <Link to="/signup">
                        <li className="nav-item" onClick={OpenNav}>
                            Signup

                        </li>
                    </Link >

                    <Link to="/Profile" >
                        <li className="nav-item" onClick={OpenNav} >
                            Account

                        </li>
                    </Link>

                    <Link to="/cart">
                        <li className="nav-item cart" onClick={OpenNav}>

                            Cart
                        </li>
                    </Link>

                    <Link to="/login" className='login' >
                        <li className="nav-item login" onClick={OpenNav}>
                            Login
                        </li>
                    </Link>

                </ul>

            </nav>

        </header>
    )
}

export default Header;

/* API :/register - user registration 
        /login - user login
        /explore - return all the products - return category
        /cart - add orders here and show bill
        /order/:id  -  order service 
        /explore/:category-name
        /offers
        /offer/:id -> redirect to service page 
        
*/
