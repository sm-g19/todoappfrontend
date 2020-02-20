import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';

// Only class components can have state
// State must live in the parent of any components that need to access it

// class App extends React.Component {
//   state = {
//     Task: [
//       {
//         taskName: "create shared Google Drive",
//         id: uuid()
//       },
//       {
//         taskName: "draw wireframe",
//         id: uuid()
//       }
//     ]
//   };
// };

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
