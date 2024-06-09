import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthService from "../api/useAuthService";

const Login = () => {
    const { login } = useAuthService()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(username, password);
            if (response.status) {
                navigate("/")
            }
        } catch (error) {
            // console.error(error)
            // console.log(error.response.data.message);
            if (!error.response) {
                setMessage('No Server response')
            } else if (error.response.status === 400) {
                setMessage('Missing required fields')
            } else if (error.response.status === 401) {
                setMessage('Invalid Login credentials')
            } else {
                setMessage("Login failed. Try again...");
            }
        } finally {
            setUsername("")
            setPassword("")

            setTimeout(() => setMessage(''), 5000)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Tab") {
            document.getElementById("password").focus();
            e.preventDefault(); // Prevent default tab behavior
        }
    }

    return (
        <div className="w-full flex justify-center">
            <div className="min-h-screen flex flex-col items-center w-full md:max-w-lg">
                <div className="px-auto w-full max-w-sm">
                    <img src="https://joinmastodon.org/logos/logo-purple.svg" alt="logo" className="mx-auto my-10 w-12" />
                    <h2 className="mt-4 text-center text-xl font-bold">
                        Login to mastodon.social
                    </h2>
                    <h1 className="text-center text-sm text-txt-depressed">
                        Login with your mastodon.social credentials
                    </h1>
                </div>
                <form
                    className="w-full h-full flex flex-col gap-y-4 p-4 md:p-10"
                    onSubmit={handleSubmit}
                >
                    <div className="h-1">
                        <p className="text-center text-xs text-light-red">{message}</p>
                    </div>
                    <div>
                        <label htmlFor="username" className="form-label">Email Addess</label>
                        <input
                            type="email"
                            id="username"
                            value={username}
                            placeholder="Enter email address"
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-field"
                            autoFocus
                            onKeyDown={handleKeyPress}
                            required
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-field"
                            required
                        />
                    </div>
                    <div className="mt-auto mb-4 md:mt-4">
                        <button
                            type="submit"
                            className="form-submit text-white"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default Login;
