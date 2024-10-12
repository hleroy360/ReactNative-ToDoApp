import React, { Component, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const TodoStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import LoadingScreen from './Loading/LoadingScreen';
import TodoScreen from './Todos/TodoScreen';
import AddTodoScreen from './Todos/AddTodoScreen';

//import TestAPIScreen from './API/TestAPIScreen';
import LocationsScreen from './Locations/LocationsScreen';

import rootReducer from './Redux/RootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer)

function TodosStackScreen({ todos, addTodo }) {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
      <TodoStack.Screen
        name="Todos"
        component={TodoScreen}
      />
      <TodoStack.Screen
        name="Add Todo"
        component={AddTodoScreen}
      />
      {/*<TodoStack.Screen
        name="Test API"
        component={TestAPIScreen}
      />*/}
    </TodoStack.Navigator>
  );
}

function LocationStackScreen({ todos, addTodo }) {
  return (
    <TodoStack.Navigator>
      <TodoStack.Screen
        name="Locations"
        component={LocationsScreen}
      />
    </TodoStack.Navigator>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name="Todo Manager"
              component={TodosStackScreen}
            />
            <Tab.Screen
              name="Locations"
              component={LocationStackScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
