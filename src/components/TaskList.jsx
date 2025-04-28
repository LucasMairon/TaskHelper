import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDeleteTask}
                    onToggleComplete={onToggleComplete}
                />
            ))}
            {tasks.length === 0 && <p>Nenhuma tarefa por enquanto!</p>}
        </ul>
    );
}

export default TaskList;