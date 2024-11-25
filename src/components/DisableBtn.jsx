import React from 'react';

function DisableBtn({ isDisabled, onToggle }) {
  return (
    <button
      className={`disable ${isDisabled ? "active" : ""}`}
      onClick={onToggle}
    >
      {isDisabled ? "Abilita" : "Disabilita"}
    </button>
  );
}

export default DisableBtn;
