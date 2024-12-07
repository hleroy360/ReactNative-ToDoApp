import React, { useRef, Component  } from 'react';
import { View, Text, StyleSheet, Animated, TextInput, Button, Dimensions, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { addTodo} from '../Redux/Actions';
import { connect } from 'react-redux';

import uuid from 'react-native-uuid';

//get dimensions
const windowWidth = Dimensions.get('window').width


const initialState = {
  text:"",
  id: 0,
}

class AddTodoScreen extends Component { 
  constructor(props){ 
    super(props) 
        
    // Set initial state 
    this.state = {
      text: initialState.text,
      id: initialState.id}
        
    // Binding this keyword 
    this.getAsyncTodo = this.getAsyncTodo.bind(this) 
  } 

  //asyncStorage code
  asyncTodo() {
    AsyncStorage.setItem('todo',JSON.stringify(this.state))
    .then(()=> console.log(this.state,'item stored...'))
    .catch(()=> console.log('err:',err))
  }
  getAsyncTodo () {
    AsyncStorage.getItem('todo')
      .then( (res) => this.setState(JSON.parse(res)) )
      .catch( (err) => console.log('err: ', err) )
  }
  //asyncStorage code end

  //Updates on text input change
  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    })
  }

  //Updates ID, Async, and dispatches todo
  addTodo = () => {
    this.state.id = uuid.v4()
    this.props.dispatchAddTodo(this.state)
    this.asyncTodo()
    //refresh state
    this.setState(initialState)
  }

  //run when 'add todo' button clicked
  handleSubmit = () => {
    () => this.input.blur()
    if (this.state.text) {
      this.addTodo();
      this.props.navigation.goBack();
    }
  }

  //animation for the Animated TextInput
  animatedWidth = new Animated.Value(windowWidth/3) //I got rid of current() and animation worked again???
  animate = (value) => {
    Animated.timing(
      this.animatedWidth,
      {
        toValue: value,
        duration: 750,
      }
    ).start()
  }


  render(){
    const {todo} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a new todo:</Text>
        <Animated.View style={{ width: this.animatedWidth }}>
          <TextInput
          //I added the dimensions width to the animations
          //It needs to reload to update though
            onBlur={()=> this.animate(windowWidth/3)}
            onFocus={() => this.animate(windowWidth - 60)} 
            ref = { input => this.input = input}
  
            style={styles.input}
            value={this.state.text}
            onChangeText={value => this.updateInput('text', value)}
            placeholder="Enter your todo"
          />
        </Animated.View>
        <Button title="Add Todo" onPress={this.handleSubmit} />

        <View style={styles.asyncContiner}>
          <Text style={{textAlign: 'center'}}>Testing AsyncStorage</Text>
          <TouchableHighlight onPress={this.getAsyncTodo } 
                              style={styles.button}>
            <Text>Get Last Submitted Todo</Text>
          </TouchableHighlight>
          <Text>Text: {this.state.text}</Text>
          <Text>ID: {this.state.id}</Text>
        </View>

      </View>

    );
  };


  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    //width: windowWidth -20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gray',
    marginTop: 15,
    padding:10,
    //width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  asyncContiner: {
    justifyContent: 'center',
    marginTop: 20,
    padding:10,
    backgroundColor:'#dddddd'
  }
});


//Redux connect stuff
const mapStateToProps = state => ({
  todos: state.todoReducer.todos
})
const mapDispatchToProps = {
  dispatchAddTodo: (todo) => addTodo(todo)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoScreen);
