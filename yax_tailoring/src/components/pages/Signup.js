import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import "../style/login.css"
import Cookies from "universal-cookie";


const cookies = new Cookies();


export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: props.password,
      name: props.name,
      retype: props.retype,
      redirect: false

      // agree: props.agree
    }
  }

  // handle email input
  handleEmail = (event) => {

    this.state.email = event.target.value;

  }

  // handle password input
  handlePassword = (event) => {

    this.state.password = event.target.value;

  }

  // handle retype
  handleRetypePass = (event) => {

    this.state.retype = event.target.value;

  }

  // handle name input
  handleName = (event) => {

    this.state.name = event.target.value;

  }

  // agreement agree


  onSignUp() {
    let email = this.state.email;
    let password = this.state.password;
    let retypepassword = this.state.retype;
    let name = this.state.name;

    /* Check email enterred or not */
    if (!email) {
      alert("Please Input Email!")
    }

    /* Check password is enterred or not */
    else if (!password) {

      alert("Please Input Password!")

    }

    /* Check retype_pass */
    else if (!retypepassword) {
      alert("Please Enter Password Again!")

    }


    /* check name */
    else if (!name) {
      alert("Please Enter your Name")

    }

    else if (password === retypepassword) {
      this.SignUp(email, password, name, retypepassword);
    }

    else {
      alert("Password Does not match")
    }

  }



  SignUp = async (email, pass, name, retype) => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/x-www-form-urlencoded"
    }

    let bodyContent = `name=${name}&email=${email}&pass=${pass}&retype_pass=${retype}`;

    let response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.json();
    console.log(data);
    alert(data.message);

    if (response.ok) {

      const cookieOption = {
        path: "/",
        encode: true,
        sameSite: true,

      }
      cookies.set("token_id", data.token, cookieOption);
      cookies.set("user_id", data.userId, cookieOption);
      this.setState({ redirect: true })

      // return <Redirect to='/login'  />
      // this.props.history.push('/path')
    }


  }


  render() {

    const { redirect } = this.state;

    console.log(redirect)

    if (redirect) {

      return <Navigate to="/" />
    }
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
                          <input type="text" id="form3Example1c" placeholder='Your name' className="form-control" onChange={this.handleName.bind(this)} />

                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email' onChange={this.handleEmail.bind(this)} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" placeholder='Password' onChange={this.handlePassword.bind(this)} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat your password' onChange={this.handleRetypePass.bind(this)} />
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" checked={this.setState({ agree: true })} />

                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in <a href="#">Terms of service</a>
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                        <button type="button" className="btn btn-primary btn-lg" style={{ backgroundColor: "#6c63ff", border: "none" }} onClick={this.onSignUp.bind(this)} >Signup</button>

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
}
