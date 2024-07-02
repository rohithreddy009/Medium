import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export const Signin: React.FC = () => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState({
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSignin = async () => {
        setIsLoading(true)
        setError('')
        try {
            const response = await axios.post(
                'https://week-13-offline.yrohithreddy12.workers.dev/api/v1/user/signin',
                postInputs,
            )
            localStorage.setItem('token', response.data.jwt)
            navigate('/blogs')
        } catch (err) {
            setError(
                'Failed to sign in. Please check your credentials and try again.',
            )
            setIsLoading(false)
        }
    }

    const handleDemoLogin = async () => {
        setIsLoading(true)
        setError('')
        try {
            const response = await axios.post(
                'https://week-13-offline.yrohithreddy12.workers.dev/api/v1/user/signin',
                {
                    email: 'demo_user@demomail.com',
                    password: 'fake-password',
                },
            )
            localStorage.setItem('token', response.data.jwt)
            navigate('/blogs')
        } catch (err) {
            setError(
                'Failed to sign in with demo credentials. Please try again.',
            )
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
                Loading...
            </div>
        )
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-800">
            <div className="w-full max-w-md">
                <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mx-auto">
                        Enter your credentials
                    </h1>

                    <div className="mt-4 text-center">
                        <span className="text-gray-300">
                            Don't have an account?
                        </span>
                        <Link
                            to="/signup"
                            className="text-blue-400 hover:text-blue-300 ml-1"
                        >
                            Sign up
                        </Link>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-300 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 dark:bg-gray-500"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={postInputs.email}
                            onChange={(e) =>
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-300 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 dark:bg-gray-500"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={postInputs.password}
                            onChange={(e) =>
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSignin}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleDemoLogin}
                        >
                            Login with Demo ID
                        </button>
                    </div>
                </form>
                {error && (
                    <p className="text-center text-red-500 text-xs">{error}</p>
                )}
            </div>
        </div>
    )
}
