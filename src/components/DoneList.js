import React from 'react';

class DoneList extends React.Component {
  render() {
    return <p classname="taskDone">{this.props.taskDone}</p>
        }
}



export default DoneList;