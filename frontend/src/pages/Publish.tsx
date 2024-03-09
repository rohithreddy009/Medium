import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Appbar />
            <div className="flex justify-center w-full pt-8"> 
                <div className="max-w-screen-lg w-full">
                    <input 
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        placeholder="Title"
                    />

                    <TextEditor onChange={(e) => setDescription(e)} />
                    
                    <button 
                        onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, { title, content: description }, {
                                headers: { Authorization: localStorage.getItem("token") }
                            });
                            navigate(`/blog/${response.data.id}`)
                        }}
                        type="submit"
                        className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    );
}

function TextEditor({ onChange }: {onChange: (value: string) => void}) {
    return (
        <div className="mt-2">
            <textarea 
                onChange={(e) => onChange(e.target.value)}
                id="editor"
                rows={8}
                className="focus:outline-none block w-full px-3 py-2 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400"
                placeholder="Write an article..."
                required
            />
        </div>
    );
}
