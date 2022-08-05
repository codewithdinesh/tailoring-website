import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Login() {
  return (

    <div class="container mt-2 mb-2" style={{ backgroundColor: "#fff" }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black bg-white" style={{ borderRadius: "25px" }}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                  <form class="mx-1 mx-md-4">


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



                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg">
                        Login
                      </button>
                    </div>

                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <div className='img-fluid '>

                    <img src="./Images/login.svg" className='login-img' alt="login" />

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
export default Login;