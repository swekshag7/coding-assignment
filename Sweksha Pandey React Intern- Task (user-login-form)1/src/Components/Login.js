import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router';


const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Navbar = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username, password, "Form Values");
        
        if(password !== "123456"){
            console.log("Password not valid")
            return;
        }
        // Route to new Page
        console.log("Route to new page")
    }

    const onFormInputChange = (source, event) => {
        event.preventDefault();
        console.log(event.target.value);
        if(source === "username"){
            setUsername(event.target.value);
        }else if(source === "password"){
            setPassword(event.target.value);
        }
    }

    return(
        <div>
           <h1>LOGIN DETAILS</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="username" placeholder="User Name" value={username} onChange={(event) => {onFormInputChange("username", event)}}></input>
                    </div>
                <div>
                    <input type="password" autocomplete="off" id="password" placeholder="Password" value={password} onChange={(event) => {onFormInputChange("password", event)}}></input>
                </div>
                <div>
                    <button id="submit" type="submit" placeholder="Submit"  onClick={() => {Navbar("/personaldetailform")}}>Submit</button>
                 </div>
            </form>
        </div>
    );
}

export default LoginComponent;