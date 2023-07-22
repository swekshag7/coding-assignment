import React, { useState } from 'react';
import './PersonalDetailForm.css'




const PersonalDetailFormComponent = () => {

    const [name, setName] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [gender, setGender] = useState("");
    const [aadharNumber, setAadharnumber] = useState("");
    const [submit, setSubmit] = useState(false);
   
    const handleSubmit = async (event) => {
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

        <div>
            <form onSubmit={handleSubmit}>
                <h1>PERSONAL DETAILS</h1>
            <div>Name*</div>
                <div>
                    <input type="text" id="name" placeholder="Name" value={name} onChange={(event) => { onFormInputChange("name", event) }}></input>
                </div>
                <div>PAN Number*</div>
                <div>
                    <input type="number" id="pannumber" placeholder="PAN Number" value={panNumber} onChange={(event) => { onFormInputChange("panNumber", event) }}></input>
                </div>
                <div>Gender</div>
                
                <div>
                    <select onChange={(event) => onFormInputChange("gender", event)}>
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
                <div>Aadhar Number*</div>
                <div>
                    <input type="number" id="aadharnumber" placeholder="Aadhar Number" value={aadharNumber} onChange={(event) => { onFormInputChange("aadharNumber", event) }}></input>
                </div>
                <div>
                    <button type="submit" id="submit" placeholder="Submit" onClick={()=> setSubmit(true)}>Submit</button>
                </div>
                <div>
                    <h1>PRINT DETAILS</h1>
                    {
                        submit?
                        <h2>{name}</h2>
                        :null
                    }
                </div>
                <div>
                    {
                        submit?
                        <h2>{panNumber}</h2>
                        :null
                    }
                </div>
                <div>
                    {
                        submit?
                        <h2>{gender}</h2>
                        :null
                    }
                </div>
                <div>
                    {
                        submit?
                        <h2>{aadharNumber}</h2>
                        :null
                    }
                </div>
</form>
</div>

               
        
    );
}

export default PersonalDetailFormComponent;