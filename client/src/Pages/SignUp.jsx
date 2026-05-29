import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Loader from '../Components/Loader';

const SignUp = () => {
    const [surName, setSurName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!surName || !firstName || !lastName || !email || !password) {
            toast.warn('Please fill in all required fields!', {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
            });
            return;
        }

        setLoading(true);

        try {
            const data = { surName, firstName, lastName, userName, email, password };

            const res = await axios.post(
                "https://project-1-backend-9424.onrender.com/signup",
                data
            );

            toast.success(res.data.message || "Account created successfully!", {
                position: "top-right",
                autoClose: 2500,
                theme: "dark",
            });

            // Clear form after successful signup
            setSurName("");
            setFirstName("");
            setLastName("");
            setUserName("");
            setEmail("");
            setPassword("");

            // Redirect to signin after delay
            setTimeout(() => {
                navigate('/signin');
            }, 2000);

        } catch (err) {
            const errorMsg = err.response?.data?.message || "Registration failed. Please try again.";
            toast.error(errorMsg, {
                position: "top-right",
                autoClose: 4000,
                theme: "dark",
            });
        } finally {
            setLoading(true);
        }
    };

    return (
        <div className="container py-5">
            {loading && <Loader />}
            <div className="row justify-content-center">
                {/* Empty column for large screens */}
                <div className="col-lg-3 d-none d-lg-block"></div>

                {/* Main Form */}
                <div className="col-lg-6 col-md-9 col-12">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-lg-5">
                            <h3 className="text-center mb-4 fw-bold">Create Account</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="surName" className="form-label fw-medium">
                                            Surname
                                        </label>
                                        <input
                                            type="text"
                                            id="surName"
                                            className="form-control py-3"
                                            placeholder="Surname"
                                            value={surName}
                                            onChange={(e) => setSurName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label fw-medium">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="form-control py-3"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 mt-2">
                                    <label htmlFor="lastName" className="form-label fw-medium">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control py-3"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label fw-medium">
                                        Choose a Username
                                    </label>
                                    <input
                                        type="text"
                                        id="userName"
                                        className="form-control py-3"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>

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
                                        Choose a Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control py-3"
                                        placeholder="Create a strong password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Terms Checkbox */}
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="terms"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree to the <a href="#" className="text-decoration-none text-primary">Terms of Use</a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-3 fw-bold rounded-pill"
                                    disabled={loading}
                                >
                                    {loading ? "Creating Account..." : "Create Account"}
                                </button>
                            </form>

                            {/* Login Link */}
                            <div className="text-center mt-4">
                                <p className="mb-0">
                                    Already have an account?{" "}
                                    <Link to="/signin" className="text-decoration-none fw-medium text-primary">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty column */}
                <div className="col-lg-3 d-none d-lg-block"></div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SignUp;