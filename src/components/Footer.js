import React from 'react'
import "./style/Footer.css"
import Contact from './/Contact';
import Faq from './/Faq';
import { BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'

const Footer = () => {
    return (
<Router>

<Routes>
          <Route path="/Faq">
            <Faq/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Routes>
        <div>
            <div class="container-max">

                <div class="card bg-white p-3 ">
                    <div class="row">

                        <div class="col-md-4 col-sm-11 col-xs-11">
                            <div class="footer-text pull-left">
                                <div class="d-flex logo">
                                    <h1 class="font-weight-bold mr-2 px-3" style={{ color: "red" }} > YAX  </h1>
                                    <h1 style={{ color: "red" }}>TAILORS</h1>
                                </div>
                                <p class="card-text"> Block No 10, Municipal Shopping Center, Athawada Bazar, Ratnagiri City, Ratnagiri - 415612 .</p>
                                {/* 16.990894323986005, 73.28742859224732 */}
                                {/* https://www.embedgooglemap.net/ */}

                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe width="508" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=%2016.990894323986005,%2073.28742859224732&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe><Link to="https://fmovies-online.net">
                                        </Link><br /><Link to="https://www.embedgooglemap.net"></Link>
                                    </div>
                                </div>

                                {/* <div class="social ">

                                    <i class="fa fa-facebook-official fa-lg" i />
                                    <i class="fa fa-instagram fa-lg"></i>
                                    <i class="fa fa-twitter fa-lg"></i>
                                    <i class="fa fa-linkedin-square fa-lg"></i>
                                    <i class="fa fa-facebook"></i>

                                </div> */}
                            </div>
                        </div>


                        <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>

                        <div class="col-md-2 col-sm-4 col-xs-4">

                            <h5 class="heading">Services</h5>
                            <ul >
                                <li> <Link to='/Men'>Men</Link></li>
                                <li><Link to='/Women'>Women</Link></li>


                                <li>
                                    <Link to='/Jeans'>
                                        Jeans </Link>
                                </li>


                                <li>
                                    <Link to='/Custommade'/>
                                        Customs made Tailored Fabric
                                 
                                </li>

                            </ul>

                        </div>


                        <div class="col-md-2 col-sm-4 col-xs-4 sm-mt-2">

                            <h5 class="heading">Opening Hours</h5>
                            <ul class="card-text">
                                <li>Mon-Sat 10.00 to 22.00.</li>
                                <li>Sunday  11.00 to 22.00.</li>
                                <li>Closed on religious holidays.</li>


                            </ul>

                        </div>


                        <div class="col-md-2 col-sm-4 col-xs-4 sm-mt-2">

                            <h5 class="heading">About Us</h5>
                            <ul class="card-text">
                                <li>
                                    <Link to='/Contact'>
                                    Contact
                                    </Link>
                                    
                                    </li>
                                <li>
                                    <Link to='/Faq'>
                                    FAQs</Link>
                                    </li>

                            </ul>

                        </div>

                    </div>


                    <div class="divider mb-4" >
                    </div>


                    <div class="row" style={{ fontSize: "10px" }}>

                        <div class="col-md-6 col-sm-6 col-xs-6">

                            <div class="pull-left">

                                <p><i class="fa-copyright"></i> &copy; All Rights Reserved. 2022</p>

                            </div>

                        </div>



                        <div class="col-md-6 col-sm-6 col-xs-6">


                            <div class="pull-right mr-4 d-flex policy">

                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>

                            </div>



                        </div>



                    </div>
                </div>

            </div>
        </div>

</Router>

    )
}

export default Footer




