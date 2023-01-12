import { createContext, useContext, useState } from "react";
import React from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [formValue, setformValue] = useState({
        email: "",
        password: "",
    });
    const [formRegisterValue, setFormRegisterValue] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [error, setError] = useState([]);

    const navigate = useNavigate();

    const csrf = () => axios.get("/sanctum/csrf-cookie");

    const getUser = async () => {
        const { data } = await axios.get("/api/user");
        setUser(data);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValue({ ...formValue, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await csrf();

        try {
            // const CSRF = await axios.get("/sanctum/csrf-cookie");
            // console.log(CSRF);
            console.log(formValue);
            const res = await axios.post("/login", formValue);
            console.log(res);
            await getUser();
            navigate("/");
        } catch (err) {
            if (err.response.status === 422) {
                setError(err.response.data.errors);
            }
        }
    };
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setFormRegisterValue({ ...formRegisterValue, [name]: value });
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        await csrf();

        try {
            // const CSRF = await axios.get("/sanctum/csrf-cookie");
            // console.log(CSRF);
            console.log(formRegisterValue);
            const res = await axios.post("/register", formRegisterValue);
            console.log(res);
            getUser();
            navigate("/");
        } catch (err) {
            if (err.response.status === 422) {
                setError(err.response.data.errors);
            }
        }
    };
    const handleLogOut = async () => {
        await axios.post("/logout").then(() => {
            setUser(null);
        });
    };
    const [forgottenCredential, setForgottenCredential] = useState({
        email: "",
        status: null,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setError([]);
        setForgottenCredential({ ...forgottenCredential, status: null });
        try {
            const res = await axios.post(
                "/forgot-password",
                forgottenCredential
            );
            setForgottenCredential({
                ...forgottenCredential,
                status: res.data.status,
            });
        } catch (err) {
            if (err.response.status === 422) {
                setError(err.response.data.errors);
            }
        }
    };
    const handleForgottenCredentialChange = (e) => {
        const { name, value } = e.target;
        setForgottenCredential({ ...formValue, [name]: value });
    };
    const [resettedCredential, setResettedCredential] = useState({
        password: "",
        password_confirmation: "",
        status: null,
        email: "",
        token: "",
    });
    const handleResetCredentialChange = async (e) => {
        const { name, value } = e.target;
        setResettedCredential({ ...resettedCredential, [name]: value });
    };
    const handleResetSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setResettedCredential({ ...resettedCredential, status: null });
        try {
            const res = await axios.post("/reset-password", resettedCredential);
            setResettedCredential({
                ...resettedCredential,
                status: res.data.status,
            });
        } catch (err) {
            if (err.response.status === 422) {
                setError(err.response.data.errors);
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                handleRegisterChange,
                handleRegister,
                formValue,
                formRegisterValue,
                handleChange,
                error,
                setError,
                csrf,
                user,
                getUser,
                handleLogOut,
                handleSubmit,
                forgottenCredential,
                setForgottenCredential,
                handleForgottenCredentialChange,
                handleResetCredentialChange,
                handleResetSubmit,
                resettedCredential,
                setResettedCredential,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
