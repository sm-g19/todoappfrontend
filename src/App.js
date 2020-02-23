import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';



//  function App() {

{/* Only class components can have state
State must live in the parent of any components that need to access it */}

class App extends React.Component {
  state = {
    todo: [
      { todoId: 13, taskName: "create shared Google Drive", done: true, dueDate: "2020-02-11" },
      { todoId: 14, taskName: "write up set up notes", done: true, dueDate: "2020-02-12" },
      { todoId: 15, taskName: "complete presentation slides", done: false, dueDate: "2020-02-24" }
    ]
  };
  render() {
    return (
      <div className="toDoApp">
        <div className="container">
          <Header />
          <TaskInput />
          <h2>This is your current task list</h2>
          <TaskList taskName="Draw components" dueDate="12/12/19" />
          <h2>Completed tasks</h2>
          <DoneList taskDone="Review class notes" dateDone="3/2/10" />
        </div>
      </div>
    );
  }

}


 
export default App;
