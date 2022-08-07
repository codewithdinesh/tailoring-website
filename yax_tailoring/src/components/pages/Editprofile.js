import React from "react";
import "../style/Editprofile.css";

export default function Editprofile(props) {
  return (
    <div class="container mt-2 mb-2" style={{ backgroundColor: "#fff" }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div
            class="card text-black bg-white"
            style={{ borderRadius: "25px" }}
          >
            <div class="card-body p-md-5">
              <h1>Edit Profile</h1>
              <hr />
              <div class="row d-flex align-item-center">
                {/* <!-- edit form column --> */}
                <div class="personal-info  align-item-center">
                  <h3>Personal info</h3>
                  <p class="alert alert-danger">Click "Save Changes" to save your changes.</p>
                  <form class="form-horizontal" role="form">
                    <div class="form-group">
                      <label class="col-lg-3 control-label">Your Name</label>
                      <div class="">
                        <input class="form-control" type="text" value="abc" />
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-lg-3 control-label">Your Email</label>
                      <div class="col">
                        <input
                          class="form-control"
                          type="text"
                          value="abc@profile.com"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-3 control-label">
                        Your Password
                      </label>
                      <div class="col">
                        <input class="form-control" type="password" />
                      </div>
                    </div>

                    <div class="form-group edit-action-btn">
                      <label class="col-md-3 control-label"></label>
                      <div class="col">
                        <input type="button" class="btn" value="Save Changes" />
                        <span></span>
                        <input
                          type="reset"
                          class="btn btn-default"
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
