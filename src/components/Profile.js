import React, { useEffect } from 'react'
import  './profile.css'

const Profile = () => {
  useEffect(() => {
    // Fetch the profile image from localStorage when the component mounts
    const profileImage = localStorage.getItem("profileImage");
    if (profileImage) {
      document.getElementById("output").src = profileImage;
    }
  }, []);
  var loadFile = function (event) {
    var image = document.getElementById("output");
    var navbarImage = document.getElementById("navbarImage");

    var imageUrl = URL.createObjectURL(event.target.files[0]);
    
    // Set image source in localStorage
    localStorage.setItem("profileImage", imageUrl);

    image.src = imageUrl;
    navbarImage.src = imageUrl;
  };
  return (
    <div className='container'>
<div class="card text-center" style={{width: "18rem;"}}>
<div class="profile-pic">
  <label class="-label" for="file">
    <span class="glyphicon glyphicon-camera"></span>
    <span>Change Image</span>
  </label>
  <input id="file" type="file" onChange={loadFile} />
  <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt='' id="output" width="200"/>
</div>
  <div class="card-body">
    <h3 class="card-title">{localStorage.getItem("user")}</h3>
    <h5 class="card-text">{localStorage.getItem("email")}</h5>
   
  </div>
</div>
</div>
  )
}

export default Profile
