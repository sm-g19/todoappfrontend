import React from 'react';

class TaskInput extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <h2>Log your tasks</h2>
          <input type="text" name="toDoItem" placeholder="Type in your task"/>
        </div>
        <div className="col-12 col-sm-4">
          <h2>Choose due date</h2>
          <input type={Date} name="dueDate" placeholder="Date due"/>
        </div>
          <div className="col-12 col-sm-4">
            <h2>ADD to task list</h2>
            <button type="button" className="btn btn-danger">Add</button>
          </div>
        </div>
        );
      }
    }
    
export default TaskInput;