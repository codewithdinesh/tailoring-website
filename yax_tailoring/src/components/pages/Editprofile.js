import React from "react";
import "../style/Editprofile.css";

export default function Editprofile(props) {
  return (
    <div className="container mt-2 mb-2" style={{ backgroundColor: "#fff" }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div
            className="card text-black bg-white"
            style={{ borderRadius: "25px" }}
          >
            <div className="card-body p-md-5">
              <h1>Edit Profile</h1>
              <hr />
              <div className="row d-flex align-item-center">
                {/* <!-- edit form column --> */}
                <div className="personal-info  align-item-center">
                  <h3>Personal info</h3>
                  <p className="alert alert-danger">Click "Save Changes" to save your changes.</p>
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label className="col-lg-3 control-label">Your Name</label>
                      <div className="">
                        <input className="form-control" type="text" value="abc" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-lg-3 control-label">Your Email</label>
                      <div className="col">
                        <input
                          className="form-control"
                          type="text"
                          value="abc@profile.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Your Password
                      </label>
                      <div className="col">
                        <input className="form-control" type="password" />
                      </div>
                    </div>

                    <div className="form-group edit-action-btn">
                      <label className="col-md-3 control-label"></label>
                      <div className="col">
                        <input type="button" className="btn" value="Save Changes" />
                        <span></span>
                        <input
                          type="reset"
                          className="btn btn-default"
                          value="Cancel"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
