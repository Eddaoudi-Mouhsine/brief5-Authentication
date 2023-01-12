import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
    const {
        csrf,
        error,
        resettedCredential,
        setResettedCredential,
        handleResetCredentialChange,
        handleResetSubmit,
    } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const { token } = useParams();

    useEffect(() => {
        setResettedCredential({
            ...resettedCredential,
            email: searchParams.get("email"),
            token: token,
        });
    }, []);
    console.log(resettedCredential.email);
    console.log(token);

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
                                Add your new password
                            </div>
                            <form onSubmit={handleResetSubmit}>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        value={resettedCredential.password}
                                        onChange={handleResetCredentialChange}
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
                                        onChange={handleResetCredentialChange}
                                        value={
                                            resettedCredential.password_confirmation
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
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
