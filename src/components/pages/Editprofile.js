import React from 'react'
import "../style/Editprofile.css";
export default function Editprofile() {
    return (
   <div>


<div class="container">
    <h1>Edit Profile</h1>
  	<hr/>
	<div class="row">
      
      <div class="col-md-3">
        <div class="text-center">
          <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"/>
          <h6>Upload a different photo...</h6>
          
          <input type="file" class="form-control"/>
        </div>
      </div>
      
      {/* <!-- edit form column --> */}
      <div class="col-md-9 personal-info">
        {/* <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> 
          <i class="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div> */}
        <h3>Personal info</h3>
        
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="Jane"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="Bishop"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Company:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="janesemail@gmail.com"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Time Zone:</label>
            <div class="col-lg-8">
              <div class="ui-select">
                <select id="user_time_zone" class="form-control">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Username:</label>
            <div class="col-md-8">
              <input class="form-control" type="text" value="janeuser"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Confirm password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn" value="Save Changes" />
              <span></span>
              <input type="reset" class="btn btn-default" value="Cancel"/>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
<hr></hr>

   </div>



















)
}
















            {/* <div class="container rounded bg-white mt-5 mb-5">
                <div class="row"> <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" />

                        <span class="font-weight-bold">Amelly</span>
                        <span class="text-black-50">amelly12@bbb.com</span>
                        <span> </span>
                    </div> </div>
                    <div class="col-md-5 border-right"> <div class="p-3 py-5"> <div class="d-flex justify-content-between align-items-center mb-3"> <h4 class="text-right">Profile Settings</h4> </div> <div class="row mt-2"> <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="" /></div> <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" /></div> </div> <div class="row mt-3"> <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value="" /></div> <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value="" /></div> <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div> <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" /></div> </div> <div class="row mt-3"> <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div> <div class="col-md-6" /><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div> </div> <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> </div> </div> <div class="col-md-4"> <div class="p-3 py-5"> <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br /> <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br /> <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div> </div> </div> </div>
        </div>
</div >
</div >



    </div >


        <div class="container rounded bg-white mt-5 mb-5"> <div class="row"> <div class="col-md-3 border-right"> <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU"><span class="font-weight-bold">Amelly</span><span class="text-black-50">amelly12@bbb.com</span><span> </span></div> </div> <div class="col-md-5 border-right"> <div class="p-3 py-5"> <div class="d-flex justify-content-between align-items-center mb-3"> <h4 class="text-right">Profile Settings</h4> </div> <div class="row mt-2"> <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div> <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div> </div> <div class="row mt-3"> <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div> <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value=""></div> <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></div> <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></div> </div> <div class="row mt-3"> <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div> <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div> </div> <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> </div> </div> <div class="col-md-4"> <div class="p-3 py-5"> <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br> <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></div> <br> <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div> </div> </div> </div>
        </div>
        </div>
    */}



