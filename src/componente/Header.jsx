import React from 'react';

const Lista = () => {
  const tasks = [
    'Alho',
    'Molho de tomate',
    'Esponja',
    'Pringles',
    'Luva'
  ];

  return (
    <header>
      <h1>Lista de compras:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </header>
  );
};

export default Lista;
