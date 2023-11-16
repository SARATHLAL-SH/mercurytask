import React from "react";
import '../CustomButtons/CustomBtn.css'


const CustomButton = ({ label, onclick, backgroundColor, disabled }) => {
    const btnStyle = {
        backgroundColor: backgroundColor || 'rgb(0, 221, 255)'
    }
  return (
    <button className="btn" onClick={onclick} style={btnStyle} disabled={disabled}  >
      {label}
    </button>
  );
};
export default CustomButton;
