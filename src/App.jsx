import React, { useState } from 'react';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import './styles/App.css'; // Ou './App.css', dependendo de onde você colocou os estilos

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="app-container">
      <h1>Minha Lista de Tarefas</h1>
      <div className="progress">
        Progresso: {progress.toFixed(0)}% ({completedTasks}/{totalTasks})
      </div>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;