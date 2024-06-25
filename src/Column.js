// Column.js
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
