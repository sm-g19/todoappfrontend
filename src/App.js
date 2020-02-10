import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';



 function App() {
  return (
    <div className="toDoApp">
    <div className="container">
      <Header />         
      <TaskInput />
      <TaskList taskName="Draw components" dueDate="12/12/19"/>
      <DoneList taskDone="Review class notes" dateDone="3/2/10"/>
    </div>
    </div>
    );
  }


export default App;
