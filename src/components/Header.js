
import React, { useState } from 'react'
import "./style/Header.css"

import {
    BrowserRouter,
    Link

} from "react-router-dom";
import Offer from './Offer';

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
            <BrowserRouter>
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

                            <Link to="/explore"> Explore  </Link >


                        </li>

                        <li className="nav-item" >

                            <Link to="/men" >
                                Men
                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link to="/woman" >
                                Women
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

                        {/* </Routes>
                    </BrowserRouter> */}

                    </ul>


                </nav>
            </BrowserRouter>

        </header>
    )
}

export default Header