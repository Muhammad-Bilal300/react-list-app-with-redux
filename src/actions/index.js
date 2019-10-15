import { ADD_TODO, DELETE_TODO, DELETE_ALL, TOGGLE_VISIBILITY, EDIT_TODO } from '../constants';

export const addTodo = (item, date) => {
  const action = {
    type: ADD_TODO,
    item,
    date
  }
  return action;
}

export const deleteTodo = (id) => {
  const action = {
    type: DELETE_TODO,
    id
  }
  return action;
}

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  }
}

export const toggleVisibility = (id, item, date, visibility) => {
  return {
    type: TOGGLE_VISIBILITY,
    id: id,
    item: item,
    date: date,
    visibility: visibility
  }
}

export const editTodo = (editText, editDate, id) => {
  return {
    type: EDIT_TODO,
    editText,
    editDate,
    id
  }
}