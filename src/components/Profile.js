import React from 'react'
import  './profile.css'

const Profile = () => {
  return (
    <div className='container'>
<div class="card text-center" style={{width: "18rem;"}}>
  <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" class="card-img-top" alt=""/>
  <div class="card-body">
    <h3 class="card-title">{localStorage.getItem("user")}</h3>
    <h5 class="card-text">{localStorage.getItem("email")}</h5>
   
  </div>
</div>
</div>
  )
}

export default Profile
