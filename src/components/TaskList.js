import React from 'react';

class TaskList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <p className="taskName">{this.props.taskName}</p>
                </div>
                <div className="col-4">
                    <p>20/12/19</p>
                </div>
                <div className="col-4">
                    <button className="btn-success">Done</button>
                    <button className="btn-danger">Update</button>
                </div>
            </div>
        );
    }
}

export default TaskList;