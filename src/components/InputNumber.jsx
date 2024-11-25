import React from 'react';

function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ margin: '0 10px' }}
    />
  );
}

export default InputNumber;
