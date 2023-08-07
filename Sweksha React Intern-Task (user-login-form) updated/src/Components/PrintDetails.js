import { React } from "react";
import PersonalDetailFormComponent from "./PersonalDetailForm";
import { useLocation } from "react-router-dom";

const PrintDetails = (props) => {
  const location = useLocation();
  console.log(location);
    return(
        <div>
<h1>PRINT DETAILS</h1>
<h3>{location.state.name}</h3>
<h3>{location.state.panNumber}</h3>
<h3>{location.state.gender}</h3>
<h3>{location.state.aadharNumber}</h3>
        </div>
    )
}
export default PrintDetails;