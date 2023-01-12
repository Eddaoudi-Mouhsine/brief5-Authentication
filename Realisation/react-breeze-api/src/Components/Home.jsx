import React, { useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";

const Home = () => {
    const { user, getUser } = useContext(AuthContext);
    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);
    return <div>{user?.name}</div>;
};

export default Home;
