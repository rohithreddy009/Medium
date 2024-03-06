import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { BottomWarning } from "../components/BottomWarning";

export const Test: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading status
    const [error, setError] = useState<string>(""); // State to handle error message
    const navigate = useNavigate();

    const handleSignin = async () => {
        setIsLoading(true); // Start loading
        setError(""); // Reset error message
        try {
            const response = await axios.post("https://week-13-offline.yrohithreddy12.workers.dev/api/v1/user/signin", {
                username,
                password
            });
            localStorage.setItem("token", response.data.token); // Store the token
            localStorage.setItem("name", username);
            navigate("/blogs"); // Navigate to the dashboard upon successful signin
        } catch (error: any) {
            // Basic error handling
            if (error.response && error.response.status === 401) {
                setError("Invalid credentials. Please try again."); // Set specific error message for invalid credentials
            } else {
                setError("You've entered invalid email or password, Try again !"); // Generic error message for other errors
            }
            setIsLoading(false); // Stop loading due to error
        }
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-800 to-black">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-4/5 bg-white rounded-lg shadow-xl flex flex-col justify-center items-center overflow-auto">
                <div className="px-6 py-4 w-full flex flex-col items-center">
                    <Heading label="Sign in" />
                    <SubHeading label="Enter your credentials to login" />
                    {error && <div className="text-red-500">{error}</div>} {/* Display error message if any */}
                    <div className="w-4/5 space-y-4">
                        <InputBox
                            // value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            placeholder="Your email"
                            label="Email"
                        />
                        <InputBox
                            // value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            placeholder="Your password"
                            label="Password"
                            type="password"
                        />
                        <Button onClick={handleSignin} label="Sign in" />
                    </div>
                    <BottomWarning label="Don't have an account?" buttonText="Sign up" to="/signup" />
                </div>
            </div>
        </div>
    );
};
