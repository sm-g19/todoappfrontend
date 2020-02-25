import React from 'react';

class DoneList extends React.Component {
  render() {
    return (

      <div className="row">
        <div className="col-12 col-sm-6">
          <h3>Done!</h3>
          <p>set up Google Drive shared space</p>
          {/* <DoneList taskDone="Review class notes" />
              <DoneList taskDone="read interview guidance" /> */}
           <p className="taskDone">{this.props.taskDone}</p>
        </div>
        <div className="col 12 col-sm-6">
          <h3>Date</h3>
          <p>11/2/2020</p>
          {/* <DoneList dateDone="3/2/20" />
              <DoneList dateDone="22/2/20" />
          <p className="dateDone">{this.props.dateDone}</p> */}
        </div>
      </div>
    );
  }
}



export default DoneList;