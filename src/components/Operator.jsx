import React from 'react';

function Operator({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
}

export default Operator;
