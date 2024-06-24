import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import {  selectUser } from "./features/userSlice";
import { login, logout } from './features/userSlice';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
      if (userAuth){
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        dispatch(logout());

      }
    });


     return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/">
             <Route path="/" element={<HomeScreen />} />
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
