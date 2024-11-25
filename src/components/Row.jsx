import React from "react";
import DisableBtn from "./DisableBtn";

function Row({ row, onDelete, onUpdate }) {
  const handleDisableToggle = () => {
    const updatedRow = { ...row, isDisabled: !row.isDisabled };
    onUpdate(row.id, updatedRow);
  };

  const handleChange = (e) => {
    const updatedRow = {
      ...row,
      value: parseInt(e.target.value, 10) || 0,
    };
    onUpdate(row.id, updatedRow);
  };

  return (
    <div className={`row ${row.isDisabled ? "disabled" : ""}`}>
      <select
        value={row.operator}
        onChange={(e) => onUpdate(row.id, { ...row, operator: e.target.value })}
        disabled={row.isDisabled}
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input
        type="number"
        value={row.value}
        onChange={handleChange}
        disabled={row.isDisabled}
      />
      <button className="delete" onClick={() => onDelete(row.id)}>
        Elimina
      </button>
      <DisableBtn
        isDisabled={row.isDisabled}
        onToggle={handleDisableToggle}
      />
    </div>
  );
}

export default Row;