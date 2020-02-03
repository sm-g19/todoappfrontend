import React from 'react';
import './App.css';
// import TaskInput from './TaskInput';
// import TaskList from './TaskList';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';


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
