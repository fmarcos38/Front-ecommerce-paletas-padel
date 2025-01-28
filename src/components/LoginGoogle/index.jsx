// Login.js
import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
    const handleSuccess = async (credentialResponse) => {
        const { credential } = credentialResponse;
        try {
            const backendResponse = await axios.post("http://localhost:3002/auth/login/google", { tokenId: credential });
            console.log("Login successful", backendResponse.data);
        } catch (error) {
            console.error("Error logging in", error.response?.data || error.message);
        }
    };

    const handleFailure = () => {
        console.error("Google Login failed");
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div className="flex items-center justify-center h-screen">
                <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
