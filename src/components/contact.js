import React from 'react'
import Header from './Header'

export default function Contact() {
  return (



    <div>
     <Header className="container-max" />
     <br/>
     <h1 >We'd love to hear from you!</h1>
     {/* <!--Section: Contact v.2--> */}
<section class="mb-4">

    {/* <!--Section heading--> */}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    {/* <!--Section description--> */}
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. We will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div class="row">
{/*  */}
                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Block No 10, Municipal Shopping Center, Athawada Bazar, Ratnagiri City, Ratnagiri - 415612 .</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 75884 61496</p>
                </li>
                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 72620 67842</p>
                </li>

                   
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@yaxtailors.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}

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

<hr/>



                    </div>

    </div>
  
  
  
    )



}



