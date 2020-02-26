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
        <div>
          <h2>Input items and due dates below</h2>
          <TaskInput />
        </div>
        <div>
          <h2>Current task list</h2>
          {/* export the task list in two columns, on the left the taskName and on the right the dueDate,
          a third column on the right has the Done and Update buttons in it for each task */}
          <TaskList taskName={["draw wireframe", "review JavaScript code", "create Git repository"]} />
          <TaskList dueDate={["11/11/19", "2/12/19", "11/2/20"]} />
        </div>
        <div>
          <h2>Completed tasks</h2>
          <DoneList taskDone={"read interview guidance"} />
          <DoneList doneDate={"22/2/20"} />
          <DoneList taskDone={"review cv"} />
          <DoneList doneDate={"3/2/20"} />
        </div>
      </div>
    );
  }
}
export default App;


