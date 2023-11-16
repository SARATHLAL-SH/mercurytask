import React from 'react';
import '../CustomInputs/CustomInputs.css'

const TextInput = ({ type, value, onChange,placeholder }) => {
  return (
    <input  className='inputArea'
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} required
    />
  );
};

export default TextInput;