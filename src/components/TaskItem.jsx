import React from 'react';

function TaskItem({ task, onDelete, onToggleComplete }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', padding: '8px', borderBottom: '1px solid #eee' }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                style={{ marginRight: '10px', cursor: 'pointer' }}
            />
            <span style={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#777' : '#333' }}>
                {task.text}
            </span>
            <button onClick={() => onDelete(task.id)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8em' }}>
                Excluir
            </button>
        </li>
    );
}

export default TaskItem;