import React, { useState } from 'react';
import './PersonalDetailForm.css'
import PrintDetails from './PrintDetails';
import { useNavigate } from 'react-router';



const PersonalDetailFormComponent = (props) => {

    const [name, setName] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [gender, setGender] = useState("");
    const [aadharNumber, setAadharnumber] = useState("");


    const Navbar = useNavigate();


   
    const handleSubmit = async (event) => {

        Navbar('/printdetails', {state:{name, panNumber, gender, aadharNumber}})

        event.preventDefault();
        console.log(panNumber.length, "Form Values");
        if (panNumber.length !== 14) {
            console.log("Pan number Length not valid")
            return;
        }
        if (aadharNumber.length !== 16) {
            console.log("Aadhar number Length not  valid")
           
            return;
           
        }
    }


    const onFormInputChange = (source, event) => {
        event.preventDefault();
        console.log(event.target.value);
        if (source === "name") {
            setName(event.target.value);
        } else if (source === "panNumber") {
            setPanNumber(event.target.value);
            console.log(panNumber)
        } else if (source === "aadharNumber") {
            setAadharnumber(event.target.value);
        } else if(source === "gender")
        setGender(event.target.value);
            console.log(gender)
        
    }
    return (

        <div className="personaldetail">
            <form onSubmit={handleSubmit}>
                <h1>PERSONAL DETAILS</h1>
            <h3>Name*</h3>
                <div>
                
                    <input type="text" id="name" placeholder="Name" value={name} onChange={(event) => { onFormInputChange("name", event) }}></input>
                </div>
                <h3>PAN Number*</h3>
                <div>
                    <input type="number" id="pannumber" placeholder="PAN Number" value={panNumber} onChange={(event) => { onFormInputChange("panNumber", event) }}></input>
                </div>
                <div>
                <h3>Gender</h3>
                 <select id="gender" onChange={(event) => onFormInputChange("gender", event)}>
                        <option value="">
                            Select Gender
                        </option>
                        <option value="Male">
                            Male
                        </option>
                        <option value="Female">
                            Female
                        </option>
                    </select>
                </div>
                <h3>Aadhar Number*</h3>
                <div>
                    <input type="number" id="aadharnumber" placeholder="Aadhar Number" value={aadharNumber} onChange={(event) => { onFormInputChange("aadharNumber", event) }}></input>
                </div>
                <div>
                    <button type="submit" disabled={!name || !panNumber || !aadharNumber} id="submit" placeholder="Submit" onClick={() => {handleSubmit}}>
                        Submit
                    </button>
                </div>
                
</form>
</div>

               
        
    );
}

export default PersonalDetailFormComponent;