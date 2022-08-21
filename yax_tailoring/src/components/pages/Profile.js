import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Profile.css"

export default function Profile() {
  return (
    <div className='container'>
      <div className="text-center profile-container">
        <div className="row gy-5">

          <div className="col-6 profile-col">
            <h1 id="pedithead">Yax Tailors, Your Place for perfect fit. </h1>
          </div>

          <div className="col-6 profile-col">
            <Link to={"/Profile/orders"}>
              <div className="p-3 border bg-light profile-element">Your Orders</div>
            </Link>
          </div>


          <div className="col-6 profile-col">
            <Link to={"/profile/addresses"}>
              <div className="p-3 border bg-light profile-element">Your Addresses</div>
            </Link>
          </div>

          <div className="col-6 profile-col">
            <Link to={"/profile/edit"}>
              <div className="p-3 border bg-light profile-element" >Edit Your Profile</div>
            </Link>

          </div>
        </div>
      </div>
    </div>




  )
}
