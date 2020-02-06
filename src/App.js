import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';


function App() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <h2>Input your tasks here</h2>              
      <TaskInput />
      <h2>Current tasks</h2>
      <TaskList taskName="Draw components"/>
      <h2>Completed tasks</h2>
      <DoneList taskDone="Review class notes"/>
      
    </div>
  );
}



export default App;
