import React from 'react';

class DoneList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-6">
          <h2>Completed Tasks</h2>
          <p className="taskDone">{this.props.taskDone}</p>
        </div>
        <div className="col 12 col-sm-6">
          <h2>Date done</h2>
        <p className="dateDone">{this.props.dateDone}</p>
        </div>


      </div>

    );
        }
}



export default DoneList;