import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from "../Nav";
import "./ProfileScreen.css";


function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&s" alt=""/>
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen