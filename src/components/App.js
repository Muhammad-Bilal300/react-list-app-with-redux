import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, deleteAll, toggleVisibility, editTodo } from '../actions';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      date: ''
    }
  }
  addTodo() {
    this.state.item !== '' && this.state.date !== ''
      ?
        this.props.addTodo(this.state.item, this.state.date)
      : alert('Please enter an item and date');
  }
  render() {

    return (
      <div className="AppComponent">
        <h1>React/Redux Todo List</h1>
        <div className="form-inline entry-info">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter a todo!"
              onChange={event => this.setState({item: event.target.value})}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({date: event.target.value})}
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addTodo()}
            >
            Submit
            </button>
            <button
              type="button"
              className="btn btn-danger delete-button"
              onClick={() => this.props.deleteAll()}
              >
              Delete All
              </button>
          </div>


        </div>
        <List parent={this.props}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo, deleteTodo, deleteAll, toggleVisibility, editTodo}, dispatch);
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);