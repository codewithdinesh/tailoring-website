import React from 'react'
import "../style/login.css"
export default function Signup() {

  return (
    <div className="container mt-2 mb-2" style={{ backgroundColor: "#fff" }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black bg-white" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"  >Sign up</p>

                  <form className="mx-1 mx-md-4">

                    <div className="d-flex flex-row align-items-center mb-4">

                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" placeholder='Your name' className="form-control" />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">

                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email' />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">

                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" placeholder='Password' />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">

                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat your password' />
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label className="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                      <button type="button" className="btn btn-primary btn-lg" style={{ backgroundColor: "#6c63ff", border: "none" }} >Signup</button>

                    </div>

                  </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
                  <div className='img-fluid '>
                    <img src="./Images/singup.svg" className='login-img' alt='singup' />

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
