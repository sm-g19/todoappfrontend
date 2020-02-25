import React from 'react';

class TaskList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-4">
                    <h3>To Dos</h3>
                    <p>draw wireframe</p>
                    <p>review JavaScript code</p>
                    {/* <p className="taskName">{this.props.taskName}</p> */}
                </div>
                <div className="col-12 col-sm-4">
                    <h3>Due Date</h3>
                    <p>11/11/19</p>
                    <p>2/12/19</p>
                {/* <p className="dueDate">{this.props.dueDate}</p> */}
                </div>
                <div className="col-12 col-sm-4">
                    <h3>Complete?</h3>
                    <button className="btn-success">Done</button>
                    <button className="btn-danger">Update</button>
                    <br></br>
                    <button className="btn-success">Done</button>
                    <button className="btn-danger">Update</button>
                </div>
            </div >

            // <div className="row">
            //     <div className="col-12 col-sm-4">
            //         <h3>To Dos</h3>
            //         <TaskList taskName="Draw components" />
            //         <TaskList taskName="wireframe" />
            //         <TaskList taskName="review JavaScript code" />
            //     </div>
            //     <div className="col-12 col-sm-4">
            //         <h3>Due Date</h3>
            //         <TaskList dueDate="12/12/19" />
            //         <TaskList dueDate="11/11/19" />
            //         <TaskList dueDate="2/12/19" />
            //     </div>
            //     <div className="col-12 col-sm-4">
            //         <h3>Complete?</h3>
            //         <button className="btn-success">Done</button>
            //         <button className="btn-danger">Update</button>
            //     </div>
            // </div>
                );
    }
}

export default TaskList;