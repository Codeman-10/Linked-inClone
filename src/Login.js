import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import './Login.css'
import { login } from './userReducer';
function Login() {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [profilepic,setProfilepic]=useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name) {
            alert("Please enter the full name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilepic
            })
            .then (()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilepic
                }))
            })
            .catch((error)=>{
              alert(error.message)  
            })
            })
 
    }
    const Logintoapp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
            })
        }

    return (
        <div className="login">
            <img src="https://qph.fs.quoracdn.net/main-qimg-981297d82e59255a79e7cd0e0efb8519" alt="" />

            <form action="">
                <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Full name (required if registering)" name="" id="" />
                <input type="text" onChange={(e)=>{setProfilepic(e.target.value)}} placeholder="Profile pic URL (optional)" />
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Email" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />
                <button type="submit" onClick={(e)=>{Logintoapp(e)}}>Sign In</button>
            </form>
            <p>Not a member?
               <span className="login_register" onClick={(e)=>{register(e)}}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
