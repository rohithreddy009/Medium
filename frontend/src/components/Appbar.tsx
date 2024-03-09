import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom"; 
export const Appbar = () => {
    const navigate = useNavigate(); 

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

    return (
        <div className="border-b border-gray-700 bg-gray-900 flex justify-between px-10 py-4 text-white">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer hover:text-gray-300">
                <span className="text-xl font-semibold">Medium</span>
            </Link>
            <div className="flex items-center">
                <Avatar size={"big"} name="harkirat" />
                <Link to={`/publish`}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors duration-200 ease-in-out">New</button>
                </Link>
                <button type="button" onClick={logout} className="ml-4 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors duration-200 ease-in-out">Logout</button>
            </div>
        </div>
    );
}

