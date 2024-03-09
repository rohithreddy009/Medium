import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            if (axios.isAxiosError(e) && e.response) {
                alert(`Error: ${e.response.data.message}`);
            } else {
                alert("Error while signing in");
            }
        }
    }
    
    return <div className="h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-md">
            <div className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        {type === "signup" ? "Create an account" : "Sign in"}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline text-blue-500 dark:text-blue-400" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </p>
                </div>
                {type === "signup" && 
                    <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })} />
                }
                <LabelledInput label="Email" placeholder="johndoe@example.com" onChange={(e) => setPostInputs({ ...postInputs, username: e.target.value })} />
                <LabelledInput label="Password" type="password" placeholder="••••••••" onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })} />
                <div className="mt-8">
                    <button onClick={sendRequest} type="button" className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-150">
                        {type === "signup" ? "Sign up" : "Sign in"}
                    </button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type = "text" }: LabelledInputType) {
    return <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">{label}</label>
        <input type={type} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-500 leading-tight focus:outline-none focus:shadow-outline" placeholder={placeholder} onChange={onChange} required />
    </div>
}
