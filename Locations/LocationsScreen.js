import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Dimensions } from 'react-native';

import { addLocation } from '../Redux/Actions'
import { connect } from 'react-redux'
import uuid from 'react-native-uuid';
import Locations from './Locations';


const initialState = {
  name: '',
  originalCoords: {},
  id: 0
}

class LocationsScreen extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      originalCoords: {latitude:1, longitude:1},
      id: 0
    }
    this.clearWatch = this.clearWatch.bind(this)
  }



  componentDidMount() {
    //this.state.id = uuid.v4()
    navigator.geolocation.getCurrentPosition(
      (success) => 
        this.setState({originalCoords: success.coords})
      ),
      (err) => console.log('err:', err)
  }
  clearWatch () {
    navigator.geolocation.clearWatch(this.state.id)
  }
  
  addLocation = () => {
    this.state.id = uuid.v4()
    this.props.dispatchAddLocation(this.state)
    //this.setState(initialState)
  }
  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    })
  }
  handleSubmit = () => {
    if (this.state.name) {
      this.addLocation();
    }
  }


  
  render(){
    return (
      <View styles={styles.container}>
        <Locations/>
        <View >
          <Text style={styles.title}>Add a new location:</Text>

          <TextInput
            styles={styles.input}
            value={this.state.name}
            onChangeText={value => this.updateInput('name', value)}
            placeholder="Location Name"
          />

          <Button title="Add Location" onPress={this.handleSubmit} />
        </View>
        
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    //marginBottom: 20,
    margin:20,
    padding: 10,
  }
});


const mapStateToProps = state => ({
  locations: state.locationReducer.locations
})
const mapDispatchToProps = {
  dispatchAddLocation: (location) => addLocation(location)
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationsScreen);