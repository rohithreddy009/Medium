import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Welcome to Medium</h1>
            <h3 className="text-xl md:text-3xl font-normal mb-8 text-gray-300 max-w-md text-center">
                Express your opinions, share your journey, and explore a world of ideas on Blogger.
            </h3>
            <button
                onClick={() => navigate("/signup")}
                className="text-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition duration-150 ease-in-out hover:scale-105 transform"
                aria-label="Get started with Blogger today"
            >
                Get Started Today
            </button>
            <footer className="w-full absolute bottom-0 text-center py-4">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved | Rohith Reddy
                </p>
            </footer>
        </div>
    );
};




