import React from 'react';

class TaskList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    First to do task
                </div>
                <div className="col-4">
                    Date due
                </div>
                <div className="col-4">
                    Done or Update - button
                </div>
            </div>
            );
    }
}

export default TaskList;