import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO } from './Actions';
import uuid from 'react-native-uuid';

//Step 1: Create an initialState object which contains an empty array called todos
const initialState = {
  todos: [
    { text: 'Sample Todo', id: uuid.v4()},
  ],
  
};

const todoReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_TODO:
      return{
        todos:[
          ...state.todos,
          action.todo
        ]
      }
    case REMOVE_TODO:
      const index = state.todos.findIndex(
        todo => todo.id === action.todo.id )
      return{
        todos: [
          ...state.todos.slice(0,index),
          ...state.todos.slice(index + 1)
        ]
      }
    default:
      return state
    }
  }

export default todoReducer