import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex' }}>
            <input
                type="text"
                placeholder="Adicionar nova tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                style={{ flexGrow: 1, padding: '8px', borderWidth: '1px', borderColor: '#ccc', borderRadius: '4px 0 0 4px', fontSize: '1em' }}
            />
            <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '0 4px 4px 0', cursor: 'pointer', fontSize: '1em' }}>
                Adicionar
            </button>
        </form>
    );
}

export default TaskForm;