import React from 'react';

const CustomInput = ({ label, type = "text", placeholder, value, onChange, name, error }) => {
  return (
    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
      {label && <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>}
      
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: error ? '2px solid red' : '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      
      {error && <span style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{error}</span>}
    </div>
  );
};

export default CustomInput;
