import React from 'react';

function DeleteBtn({ onDelete }) {
  return (
    <button class="delete" onClick={onDelete}>Elimina</button>
  );
}

export default DeleteBtn;
