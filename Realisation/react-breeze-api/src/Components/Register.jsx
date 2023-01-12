import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useEffect } from "react";
const Register = () => {
    const {
        handleRegister,
        formRegisterValue,
        handleRegisterChange,
        error,
        csrf,
    } = useContext(AuthContext);
    console.log(formRegisterValue);
    useEffect(() => {
        csrf();
    }, []);

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="
      relative
      mx-auto
      max-w-[525px]
      overflow-hidden
      rounded-lg
      bg-white
      py-16
      px-10
      text-center
      sm:px-12
      md:px-[60px]
    "
                        >
                            <div className="mb-10 text-center md:mb-16">
                                Laraveller
                            </div>
                            <form onSubmit={handleRegister}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleRegisterChange}
                                        value={formRegisterValue.name}
                                        placeholder="Name"
                                        className="
            bordder-[#E9EDF4]
            w-full
            rounded-md
            border
            bg-[#FCFDFE]
            py-3
            px-5
            text-base text-body-color
            placeholder-[#ACB6BE]
            outline-none
            focus:border-primary
            focus-visible:shadow-none
          "
                                    />

                                    {error.name && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">
                                                {error.name[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleRegisterChange}
                                        value={formRegisterValue.email}
                                        placeholder="Email"
                                        className="
            bordder-[#E9EDF4]
            w-full
            rounded-md
            border
            bg-[#FCFDFE]
            py-3
            px-5
            text-base text-body-color
            placeholder-[#ACB6BE]
            outline-none
            focus:border-primary
            focus-visible:shadow-none
          "
                                    />
                                    {error.email && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">
                                                {error.email[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="password"
                                        value={formRegisterValue.password}
                                        onChange={handleRegisterChange}
                                        name="password"
                                        placeholder="Password"
                                        className="
            bordder-[#E9EDF4]
            w-full
            rounded-md
            border
            bg-[#FCFDFE]
            py-3
            px-5
            text-base text-body-color
            placeholder-[#ACB6BE]
            outline-none
            focus:border-primary
            focus-visible:shadow-none
          "
                                    />
                                    {error.password && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">
                                                {error.password[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        onChange={handleRegisterChange}
                                        value={
                                            formRegisterValue.password_confirmation
                                        }
                                        placeholder="Password Confirmation"
                                        className="
            bordder-[#E9EDF4]
            w-full
            rounded-md
            border
            bg-[#FCFDFE]
            py-3
            px-5
            text-base text-body-color
            placeholder-[#ACB6BE]
            outline-none
            focus:border-primary
            focus-visible:shadow-none
          "
                                    />
                                    {error.password_confirmation && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">
                                                {error.password_confirmation[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-10">
                                    <button
                                        type="submit"
                                        className="
            w-full
            px-4
            py-3
            bg-indigo-500
            hover:bg-indigo-700
            rounded-md
            text-white
          "
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                            <Link
                                to="/forgot-password"
                                className="
        mb-2
        inline-block
        text-base text-[#adadad]
        hover:text-primary hover:underline
      "
                            >
                                Forgot Password?
                            </Link>
                            <p className="text-base text-[#adadad]">
                                Not a member yet?
                                <Link
                                    to="/Register"
                                    className="text-primary hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
