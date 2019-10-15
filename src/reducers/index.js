import { ADD_TODO, DELETE_TODO, DELETE_ALL, TOGGLE_VISIBILITY, EDIT_TODO } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const todo = (action) => {
  return {
    item: action.item,
    date: action.date,
    visible: true,
    id: Math.random()
  }
}

const deleteTodoById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  return todos;
}

const updateVisibility = (state = [], id, item, date, visibility) => {
  return state.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    else if (todo.id === id) {
      return {
        item: item,
        date: date,
        visible: visibility,
        id: id
      };
    }
  });

}

const updateTodo = (state = [], updatedText, updatedDate, id) => {
  return state.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    else if (todo.id === id) {
      return {
        item: updatedText,
        date: updatedDate,
        visible: true,
        id: id
      };
    }
  });
}

const todos = (state = [], action) => {
  let todos = null;
  state = read_cookie('todos');
  switch (action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      bake_cookie('todos', todos);
      return todos;
    case DELETE_TODO:
      todos = deleteTodoById(state, action.id);
      bake_cookie('todos', todos);
      return todos;
    case DELETE_ALL:
      todos = [];
      bake_cookie('todos', todos);
      return todos;
    case TOGGLE_VISIBILITY:
      todos = updateVisibility(state, action.id, action.item, action.date, action.visibility);
      return todos;
    case EDIT_TODO:
      todos = updateTodo(state, action.editText, action.editDate, action.id);
      bake_cookie('todos', todos);
      return todos;
    default:
      return state;
  }
}

export default todos;