
import React, { useState } from 'react'
import "./style/Header.css"
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
        <header class="header">
        
            <nav class="navbar">

                {/* Mobile */}
                <div class={`hamburger ${close}`} onClick={OpenNav}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <div class="logo-container">

                    <Link to='/' style={{ textDecoration: "none" }}>

                        YAX<span> Tailors</span>

                    </Link>
                </div>


                <ul class={`nav-items  ${state}`}>

                    <li className="nav-item">

                        <Link to="/signup"> Signup  </Link >

                    </li>

                    <li className="nav-item" >

                        <Link to="/Profile" >
                            Your Account
                        </Link>
                    </li>
        

                    <li className="nav-item cart">

                        <Link to="/cart">
                            Cart
                        </Link>

                    </li>
                    <li className="nav-item login">

                        <Link to="/login" className='login' >
                            Login
                        </Link>

                    </li>


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
