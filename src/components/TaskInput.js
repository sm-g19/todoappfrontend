import React from 'react';

class TaskInput extends React.Component {

  render() {
    return (
        <div className="row">
          <div className="col-4">
              This is where the input box will be
          </div>
          <div className="col-4">
              This is where the date due will be input
          </div>
          <div className="col-4">
              This is where the ADD button will go
          </div>
        </div>
    );
  }
}

export default TaskInput;