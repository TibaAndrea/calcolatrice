import React, { useState } from 'react';
import AddRow from './components/AddRow';
import Row from './components/Row';
import Result from './components/Result';

function App() {
  const [rows, setRows] = useState([]);
  const [result, setResult] = useState(0);

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), operator: '+', value: 0 }]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleUpdateRow = (id, updatedRow) => {
    setRows(rows.map(row => (row.id === id ? updatedRow : row)));
  };

  const calculateResult = () => {
    const total = rows.reduce((acc, row) => {
      return row.operator === '+' ? acc + row.value : acc - row.value;
    }, 0);
    setResult(total);
  };

  return (
    <div>
      <h1>Calcolatrice</h1>
      {rows.map(row => (
        <Row key={row.id} row={row} onDelete={handleDeleteRow} onUpdate={handleUpdateRow} />
      ))}
      <AddRow onAdd={handleAddRow} />
      <Result value={result} />
      <button class="calculate" onClick={calculateResult}>Calcola</button>
    </div>
  );
}

export default App;