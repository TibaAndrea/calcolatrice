import React from 'react';

function AddRow({ onAdd }) {
  return (
    <button class="add" onClick={onAdd}>Aggiungi Riga</button>
  );
}

export default AddRow;