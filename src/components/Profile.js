import React, { useEffect } from 'react';
import './profile.css';

const Profile = () => {
  useEffect(() => {
    // Fetch the profile image from localStorage when the component mounts
    const profileImage = localStorage.getItem("profileImage");
  if(profileImage){
    // Set the image source based on whether it exists in localStorage
    document.getElementById("output").src = profileImage;}

  else{
    document.getElementById("output").src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
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
    <div className='container text-center'>
      <h1>Your Personal Details</h1>
      <p>Tap on image to change </p>
    <div className='container center'>
      <div className="card text-center" style={{ width: "27rem" }}>
        <div className="profile-pic">
          <label className="-label" htmlFor="file">
            <span className="glyphicon glyphicon-camera"></span>
            <span>Change Image</span>
          </label>
          <input id="file" type="file" onChange={loadFile} />
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt='icon' id="output" width="200" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{localStorage.getItem("user")}</h3>
          <h5 className="card-text">{localStorage.getItem("email")}</h5>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
