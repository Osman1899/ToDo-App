// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, markComplete, deleteTask, editTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => markComplete(task.id)}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button onClick={() => editTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
