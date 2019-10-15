import React, { Component } from 'react';
import moment from 'moment';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: '',
            editDate: ''
        }
    }
    editTodo(id) {
        this.props.parent.editTodo(this.state.editText, this.state.editDate, id);
        this.setState({
            editText: '',
            editDate: ''
        })
    }
    render() {
        return (
            <div className="ListComponent">
                <ul className="list-group col-sm-4">
                    {
                        this.props.parent.todos.map(todo => {
                            if (todo.visible === true) {
                                let todoDate = new Date(todo.date);
                                let convertedDate = todoDate.getTime();
                                return (
                                    <li key={todo.id} className="todo list-group-item">
                                        <div className="todo-item todo-text">
                                            <span className="todo-text">{todo.item} </span>
                                            <span><em>{moment(new Date(todo.date)).fromNow()}</em></span>
                                            {

                                                (Date.now() - convertedDate) > 0
                                                    ?
                                                    <span className="past-due">PAST DUE!</span>
                                                    : <div></div>
                                            }
                                        </div>
                                        <div className="option-buttons">
                                            <div className="edit-icon todo-item"
                                                onClick={() => this.props.parent.toggleVisibility(todo.id, todo.item, todo.date, false)}
                                            >
                                                <span className="fa fa-pencil">Edit</span>
                                            </div>
                                            <div className="delete-icon todo-item"
                                                onClick={() => this.props.parent.deleteTodo(todo.id)}
                                            >
                                                <span className="fa fa-trash">delete</span>
                                            </div>
                                        </div>
                                    </li>

                                )
                            }
                            else {
                                return (
                                    <li key={todo.id} className="list-group-item">


                                        <input
                                            className="form-control edit-item-input"
                                            placeholder={todo.item}
                                            onChange={event => this.setState({ editText: event.target.value })}
                                        />
                                        <input
                                            className="form-control edit-date-input"
                                            type="datetime-local"
                                            placeholder={todo.date}
                                            onChange={event => this.setState({ editDate: event.target.value })}
                                        />

                                        <div className="edit-buttons todo-item">
                                            <span
                                                className="save-icon glyphicon glyphicon-ok"
                                                onClick={() => this.editTodo(todo.id)}
                                            >
                                            </span>
                                            <span
                                                className="cancel-icon"
                                                onClick={() => this.props.parent.toggleVisibility(todo.id, todo.item, todo.date, true)}
                                            >
                                                &#x2715;
                      </span>
                                        </div>


                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default List;