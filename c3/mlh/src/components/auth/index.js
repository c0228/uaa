import React, { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { ContainerFluid, Row, Col, Icon, Button } from "e-ui-react";

const Auth = () =>{
  
  const initializeAuth = (userDetails) =>{
    // Check in Database

    // Set into LocalStorage
    localStorage.setItem("MLH_USER_DETAILS", JSON.stringify(userDetails));

    // Redirect to postalCode Setup Page
     window.location.href=process.env.PROJECT_URL+'onboarding/set-postal-code';
  };
  const AuthSetup = useGoogleLogin({
   onSuccess: async(tokenResponse) =>{
    const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo',
       { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } });
    const user = await userInfo.json();
    const userDetails = {
        surName: user?.family_name,
        name: user?.given_name,
        profilePic: user?.picture,
        email: user?.email,
        emailVerified: user?.email_verified
    };
    initializeAuth(userDetails);
   },
   onError: () => console.log('Login Failed')
 });
 return (<>
    
        <div align="center">
            <Button type="outline-success" size={16} onClick={()=>AuthSetup()}>
                <img src={process.env.PROJECT_URL+"assets/images/google-icon.png"} 
                style={{ width:'30px', height:'auto', padding:'3px', borderRadius:'50%', marginTop:'-3px' }}/>
                <span style={{ marginLeft:'8px' }}><b>Continue with Google</b></span>
            </Button>
        </div>
 </>);
};

export default Auth;