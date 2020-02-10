import React from 'react';

class TaskList extends React.Component {
    render() {
        return (            
            <div className="row">
                <div className="col-12 col-sm-4">
                    <h2>Current task list</h2>
                    <p className="taskName">{this.props.taskName}</p>
                </div>
                <div className="col-12 col-sm-4">
                    <h2>Dates due</h2> 
                    <p className="dueDate">{this.props.dueDate}</p>
                </div>
                <div className="col-12 col-sm-4">
                    <h2>Log status</h2>
                    <button className="btn-success">Done</button>
                    <button className="btn-danger">Update</button>
                </div>
            </div>
        );
    }
}

export default TaskList;