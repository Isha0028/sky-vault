import React, { useEffect } from 'react';
import './profile.css';

const Profile = () => {
  useEffect(() => {
    // Fetch the profile image from localStorage when the component mounts
    const profileImage = localStorage.getItem("profileImage");

    // If profileImage exists, set it as the source; otherwise, set a default image
    if (profileImage) {
      document.getElementById("output").src = profileImage;
    } else {
      // Set a default image path if no profile image is found
      document.getElementById("output").src = "public/default-profile.jpg";
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
    <div className='container center'>
      <div className="card text-center" style={{ width: "18rem" }}>
        <div className="profile-pic">
          <label className="-label" htmlFor="file">
            <span className="glyphicon glyphicon-camera"></span>
            <span>Change Image</span>
          </label>
          <input id="file" type="file" onChange={loadFile} />
          <img src="public/default-profile.jpg" alt='icon' id="output" width="200" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{localStorage.getItem("user")}</h3>
          <h5 className="card-text">{localStorage.getItem("email")}</h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
