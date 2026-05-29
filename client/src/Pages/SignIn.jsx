import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useState } from 'react';
import Loader from '../Components/Loader';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.warn('Please enter your email and password!', {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
            });
            return;
        }

        setLoading(true);

        try {
            const data = { email, password };

            const res = await axios.post(
                "https://project-1-backend-9424.onrender.com/login",
                data
            );

            const token = res.data.token;
            localStorage.setItem("token", JSON.stringify(token));

            toast.success(res.data.message || "Login successful!", {
                position: "top-right",
                autoClose: 2500,
                theme: "dark",
            });

            setTimeout(() => {
                setLoading(false);
                navigate("/dashboard");
            }, 2000);

        } catch (err) {
            const errorMsg = err.response?.data?.message || "Invalid email or password";
            toast.error(errorMsg, {
                position: "top-right",
                autoClose: 4000,
                theme: "dark",
            });
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <div className="row justify-content-center">
                {/* Left empty column for large screens */}
                <div className="col-lg-4 d-none d-lg-block"></div>

                {/* Main Form Column */}
                <div className="col-lg-4 col-md-8 col-12">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-lg-5">
                            <h3 className="text-center mb-4 fw-bold">Account Log in</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-medium">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control py-3"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label fw-medium">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control py-3"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-3 fw-bold rounded-pill"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Log In"}
                                </button>
                            </form>

                            {/* Keep me logged in */}
                            <div className="d-flex align-items-center gap-2 mt-4">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Keep me logged in
                                </label>
                            </div>

                            {/* Links */}
                            <div className="text-center mt-4">
                                <p>
                                    <a href="#" className="text-decoration-none text-primary">
                                        Forgot password?
                                    </a>
                                </p>
                                <p className="mb-0">
                                    Don`&apos;t have an account?{" "}
                                    <Link to="/signup" className="text-decoration-none fw-medium text-primary">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right empty column */}
                <div className="col-lg-4 d-none d-lg-block"></div>
            </div>

            <ToastContainer />
        </>
    );
};

export default SignIn;