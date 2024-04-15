import TodoReducer from "./TodoReducer";
import uuid from 'react-native-uuid';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO='REMOVE_TODO'

export const ADD_LOCATION = 'ADD_LOCATION'
export const REMOVE_LOCATION='REMOVE_LOCATION'


function fetchTodos() {
  return{
    type:'FETCH_TODOS'
  }
}


export function addTodo(todo) {
  return {
    type:'ADD_TODO',
    todo: {
      ...todo,
      //id: uuid.v4()
    }
  }
}

export function removeTodo(todo){
  return{
    type:REMOVE_TODO,
    todo
  }
}

export function addLocation(location) {
  return {
    type:'ADD_LOCATION',
    location: {
      ...location,
    }
  }
}

export function removeLocation(location){
  return{
    type:REMOVE_LOCATION,
    location
  }
}