# Kanban Estático em React

Este é um projeto de Kanban estático desenvolvido em React. Ele possui cinco status diferentes para as vagas e permite que você clique em uma vaga para visualizar os detalhes das candidaturas associadas em uma modal.

## Pré-requisitos

- Node.js instalado na máquina
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório para a sua máquina local:

```sh
   git clone https://github.com/seu-usuario/static-kanban.git 
```

```sh
cd static-kanban
```
3. Instale as dependências do projeto:

```sh
  npm install
```
## Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:

```sh
  npm start
```
O aplicativo estará disponível em http://localhost:3000.

## Estrutura do Projeto
  - App.js: Componente principal do aplicativo que gerencia os estados e passa as propriedades para os componentes filhos.
  - Column.js: Componente que representa uma coluna do Kanban.
  - Item.js: Componente que representa uma vaga no Kanban.
  - ItemDetailsModal.js: Componente que exibe uma modal com os detalhes das candidaturas da vaga.
  - App.css, Column.css, Item.css, ItemDetailsModal.css: Arquivos de estilo para os componentes.
## Uso
  1- As vagas são organizadas em colunas de acordo com o seu status: "To Do", "In Progress", "In Review", "Done" e "Archived".
  2- Clique em uma vaga para visualizar os detalhes das candidaturas em uma modal.
  3- A modal exibe uma tabela com os detalhes das candidaturas (ID, Nome e Email).
  4- Clique no botão "Fechar" para fechar a modal.
## Exemplo de Código
  `App.js`
```jsx

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
```

`Column.js`
```jsx

import React from 'react';
import './Column.css';
import Item from './Item';

const Column = ({ status, items, onItemClick }) => {
  return (
    <div className="kanban-column">
      <h2>{status}</h2>
      <div className="kanban-items">
        {items.map(item => (
          <Item 
            key={item.id} 
            content={item.content} 
            onClick={() => onItemClick(item)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
```

`Item.js`
```jsx

import React from 'react';
import './Item.css';

const Item = ({ content, onClick }) => {
  return (
    <div className="kanban-item" onClick={onClick}>
      {content}
    </div>
  );
};

export default Item;
```

`ItemDetailsModal.js`
```jsx

import React from 'react';
import Modal from 'react-modal';
import './ItemDetailsModal.css';

Modal.setAppElement('#root');

const ItemDetailsModal = ({ isOpen, onRequestClose, item }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Item Details"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Detalhes da Vaga</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {item.candidaturas.map(candidatura => (
            <tr key={candidatura.id}>
              <td>{candidatura.id}</td>
              <td>{candidatura.nome}</td>
              <td>{candidatura.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default ItemDetailsModal;
```

`App.css`
```css
.kanban-board {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh;
  box-sizing: border-box;
}
```

`Column.css`
```css
.kanban-column {
  width: 18%;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.kanban-column h2 {
  position: sticky;
  top: 0;
  background-color: #e0e0e0;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  border-bottom: 2px solid #ccc;
  z-index: 1;
}

.kanban-items {
  flex-grow: 1;
}
```

`Item.css`
```css

.kanban-item {
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.kanban-item:hover {
  background-color: #f0f0f0;
}
```

`ItemDetailsModal.css`
```css

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.Modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
}

.Modal h2 {
  margin-top: 0;
}

.Modal table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.Modal th, .Modal td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.Modal button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.Modal button:hover {
  background-color: #0056b3;
}
```

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Para contribuir, siga os passos abaixo:

  1- Faça um fork do projeto
  2- Crie uma nova branch (git checkout -b feature/sua-feature)
  3- Faça as suas alterações e commit (git commit -am 'Adicionei uma nova feature')
  4- Envie para a branch (git push origin feature/sua-feature)
  5- Crie um novo Pull Request

## Licença
Este projeto está licenciado sob a MIT License.





