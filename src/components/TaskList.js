import React from 'react';

class TaskList extends React.Component {
    render() {
        return <p classname="taskName">{this.props.taskName}</p>
    }
}

export default TaskList;