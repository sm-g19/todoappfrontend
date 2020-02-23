import React from 'react';

class DoneList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-6">
          <h3>Done!</h3>
          <p className="taskDone">{this.props.taskDone}</p>
        </div>
        <div className="col 12 col-sm-6">
          <h3>Date</h3>
        <p className="dateDone">{this.props.dateDone}</p>
        </div>


      </div>

    );
        }
}



export default DoneList;