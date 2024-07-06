import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
            <h1>About</h1>
            This is a sample React Router program.
        </div>

    )

}
export default About;