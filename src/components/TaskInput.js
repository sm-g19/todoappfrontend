import React from 'react';

class TaskInput extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <p>Research APIs</p>
        </div>
        <div className="col-4">
          <p>10/2/20</p>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-danger">Add</button>
        </div>
      </div>
    );
  }
}

export default TaskInput;