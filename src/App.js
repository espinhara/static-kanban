// App.js
import React, { useState } from 'react';
import './App.css';
import Column from './Column';
import ItemDetailsModal from './ItemDetailsModal';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const statuses = ["To Do", "In Progress", "In Review", "Done", "Archived"];

  const items = [
    { id: 1, status: "To Do", content: "Vaga 1", candidaturas: [{ id: 1, nome: "Candidato 1", email: "candidato1@example.com" }, { id: 2, nome: "Candidato 2", email: "candidato2@example.com" }] },
    { id: 2, status: "In Progress", content: "Vaga 2", candidaturas: [{ id: 3, nome: "Candidato 3", email: "candidato3@example.com" }] },
    { id: 3, status: "In Review", content: "Vaga 3", candidaturas: [{ id: 4, nome: "Candidato 4", email: "candidato4@example.com" }] },
    { id: 4, status: "Done", content: "Vaga 4", candidaturas: [] },
    { id: 5, status: "Archived", content: "Vaga 5", candidaturas: [] }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="kanban-board">
      {statuses.map(status => (
        <Column
          key={status}
          status={status}
          items={items.filter(item => item.status === status)}
          onItemClick={handleItemClick}
        />
      ))}
      {selectedItem && (
        <ItemDetailsModal
          isOpen={!!selectedItem}
          onRequestClose={closeModal}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default App;
