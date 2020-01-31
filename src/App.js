import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      <div className="container">
        <div className="row">
          <legend>Enter or update items on your list in the boxes below:</legend>
          <div className="col-12 col-sm-6">
            <label>Your to do item</label>
            <input type="text" name="toDoItem" placeholder="type your TO DO item here" />
          </div>
          <div className="col-12 col-sm-4">
            <label>Due date</label>
            <input type="date" name="dueDate" placeholder="18/11/19" />
          </div>
          <div className="col-12 col-sm-2">
            <button type="button" className="btn btn-danger">Add</button>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h2>This is your task list</h2>
        <div className="container">
          <div className="row">
            <legend>Log tasks as done or needing update as needed</legend>
            <div className="col-12 col-sm-5">
              <label>Task details</label>
              <ul>
                <li>read through notes</li>
                <li>write list</li>
                <li>create app diagram</li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <label>Due date</label>
              <ul>
                <li>12/11/19</li>
                <li>13/11/19</li>
                <li>20/11/19</li>
              </ul>
            </div>
            <div className="col-12 col-sm-2">
              <label>Done: Y/N</label>
              <div className="radio-inline">
                <label><input type="radio" name="optradio" checked />Y</label>
                <label><input type="radio" name="optradio" />N</label>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <h2>This is where completed tasks are logged</h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <label>Task details</label>
            <ul>
              <li>last item completed</li>
              <li>penultimate item completed</li>
              <li>second item completed</li>
              <li>first item completed</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6">
            <label>Date completed</label>
            <ul>
              <li>18/11/16</li>
              <li>26/11/19</li>
              <li>11/11/19</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
