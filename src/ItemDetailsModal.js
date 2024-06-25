// ItemDetailsModal.js
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
