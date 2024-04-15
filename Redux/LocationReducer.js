import { combineReducers } from 'redux';
import { ADD_LOCATION, REMOVE_LOCATION } from './Actions';
import uuid from 'react-native-uuid';

const initialState = {
    locations: [
      {name: 'test',
      originalCoords: {latitude:1, longitude:1},
      id: 0}
  ],
  
};

const locationReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_LOCATION:
      return{
        locations:[
          ...state.locations,
          action.location
        ]
      }
    case REMOVE_LOCATION:
      const index = state.locations.findIndex(
        location => location.id === action.location.id )
      return{
        locations: [
          ...state.locations.slice(0,index),
          ...state.locations.slice(index + 1)
        ]
      }
    default:
      return state
    }
  }

export default locationReducer