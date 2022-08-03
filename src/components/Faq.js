import React from 'react'
import Header from './Header';

export default function Faq() {
  return (
    <>
 <Header className="container-max" />


    {/* <!--Section: FAQ--> */}
<section>
  <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i> What is the price of a custom tailored shirt?</h6>
      <p>
      Prices start from Rs.399 per shirt.But we have occasional discounts on our garments.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> How long does it take to receive my custom-tailored garments?</h6>

      <p>
      Once your order has been given we do our best to manufacture within 1-2 weeks. From this point, it typically takes between 7-14 business days (except expedite orders).

      </p>

    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i>Do I have to worry about shrinkage?
      </h6>
      <p>
      No. Most of our fabrics are pre-shrunk, compliant with ITF standards that require cotton fabrics to shrink less than 2%. Any other residual shrinkage is considered in the shirt construction process. Some fabrics in our range eg linen and selected 100% cotton have shrinkage of 3-5%.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> My garment does not fit. What should I do?
      </h6>
      <p>
      Please wash the garment first in accordance with the instructions given. We add a certain amount of fabric during production to adjust for the shrinkage that occurs during the first few washes. If you have ordered for the first time or with new or amended measurements, please send us some pictures of you wearing the garment (rear and front). Stand upright and relaxed with both arms by your side.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> What is your alterations policy?
      </h6>
      Since fittings are not available during the trunk shows, we base sizing on a current garment the client owns and adjust as needed. This means the suit or shirt you bring functions as a fitting stage garment, allowing us to make tweaks from a good starting point. This allows us to achieve a perfect fit without fittings. In the unlikely event of any issues, we typically offer a credit for local alterations for minor tweaks or in extreme cases remakes of the entire garment
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"> I'd like to purchase uniforms for my company. Are you able to provide such services?</h6><i class="fas fa-book-open text-primary pe-2"></i>
      <p>
      Yes, we specialize in bespoke tailored uniforms. For more details, contact us at contact@yaxtailors.com
      </p>
    </div>
  </div>
</section>
{/* <!--Section: FAQ--> */}

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


                        <hr />
                    </div>

    
    </>
  )
}
