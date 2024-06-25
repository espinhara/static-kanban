// Item.js
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
