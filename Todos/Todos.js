import React, { Component, useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';

import { addTodo, removeTodo } from '../Redux/Actions'
import { connect } from 'react-redux'

class Todos extends Component {
  removeTodo = (todo) => {
    this.props.dispatchRemoveTodo(todo)
  }
  render(){
    const { todos } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          {
            todos.map((todo, index) => (
              <View style={styles.todo} key={index}>
                <Text style={styles.text}>{todo.text}</Text>
                <Text style={styles.id}>{todo.id}</Text>
                <Text onPress={()=> this.removeTodo(todo)}>Remove</Text>
              </View>
            ))
          }
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    margin:10
  },
  todoContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',

  },
  todo: {
    padding: 20
  },
  text: {
    fontSize: 18
  },
  id: {
    fontSize: 14,
    color: '#999'
  }
})


const mapStateToProps = state => ({
  todos: state.todoReducer.todos
})
const mapDispatchToProps = {
  dispatchRemoveTodo:(todo) => removeTodo(todo)
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);