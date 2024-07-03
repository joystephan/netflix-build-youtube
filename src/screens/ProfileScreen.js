import React from 'react';
import './ProfileScreen.css';  // Adjusted for ProfileScreen's own CSS (if any)
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='profileScreen'>
      <h1>Profile Screen</h1>
      <div className='profileScreen__info'>
        <h2>{user.email}</h2>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default ProfileScreen;
