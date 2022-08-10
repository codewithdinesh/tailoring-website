import React from 'react'
import "../style/login.css"
export default function Signup() {
  
  return (
    <div class="container mt-2 mb-2" style={{ backgroundColor: "#fff" }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black bg-white" style={{ borderRadius: "25px" }}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"  >Sign up</p>

                  <form class="mx-1 mx-md-4">

                    <div class="d-flex flex-row align-items-center mb-4">

                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" placeholder='Your name' class="form-control" />

                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">

                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" placeholder='Your Email' />

                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">

                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" placeholder='Password' />

                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">

                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" class="form-control" placeholder='Repeat your password' />
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                      <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:"#6c63ff",border:"none" }} >Signup</button>

                    </div>

                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
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