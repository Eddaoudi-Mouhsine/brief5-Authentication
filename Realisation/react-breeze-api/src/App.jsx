import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthContext from "./Context/AuthContext";
import { useContext } from "react";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

function App() {
    const { handleLogOut, user } = useContext(AuthContext);
    return (
        <div className="bg-slate-100 min-h-screen">
            <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <a href="#" className="flex items-center">
                        Authentication System
                    </a>

                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                        bis_skin_checked="1"
                    >
                        <ul
                            className="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            {user ? (
                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="
          block
          rounded
          py-2
          pr-4
          pl-3
          text-gray-50
          hover:bg-gray-700
        "
                                    >
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to="/Login"
                                            className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/Register"
                                            className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                  md:border-0
                "
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto mt-6"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/password-reset/:token" element={<ResetPassword/>} />
            </Routes>
        </div>
    );
}

export default App;
