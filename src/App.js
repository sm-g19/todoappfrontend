import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <h2>Input items and due dates below</h2>
        <TaskInput />
        <h2>Current task list</h2>
        <TaskList taskName={["draw wireframe", "review JavaScript code", "create Git repository"]} />      
        <h2>Completed tasks</h2>
        <DoneList taskDone={["Review class notes", "read interview guidance"]} />
      </div>
    );
  }
}
export default App;

      
