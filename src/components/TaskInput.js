import React from 'react';

class TaskInput extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <h3>Log your tasks</h3>
          <input type="text" name="toDoItem" placeholder="Type in your task"/>
        </div>
        <div className="col-12 col-sm-4">
          <h3>Choose due date</h3>
          <input type={Date} name="dueDate" placeholder="Date due"/>
        </div>
          <div className="col-12 col-sm-4">
            <h3>Click ADD to task list</h3>
            <button type="button" className="btn btn-danger">Add</button>
          </div>
        </div>
        );
      }
    }
    
export default TaskInput;