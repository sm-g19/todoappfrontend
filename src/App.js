import React from 'react';
import './App.css';
// import TaskInput from './TaskInput';
// import TaskList from './TaskList';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import DoneList from './DoneList';


function App() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <TaskInput />
      <TaskList />
      <DoneList />
    </div>
  );
}



export default App;
