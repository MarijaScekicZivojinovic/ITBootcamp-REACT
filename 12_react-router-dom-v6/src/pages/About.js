import React from "react";
import { useNavigate } from 'react-router-dom';


const About = () => {

    const handleLogout = () => {
        localStorage.setItem("isLogin", false)
    }
    return (
        <div>If you are seeing this, you're authenticated

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default About;