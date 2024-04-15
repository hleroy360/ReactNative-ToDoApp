import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Alert, Platform } 
       from 'react-native'

export default class TestAlert extends Component {
  constructor () {
    super()
    this.state = {
      showMessage: false
    }
    this.showAlert = this.showAlert.bind(this)
  }


  showAlert () {
    Alert.alert(
      'Title',
      'Message!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Dismiss called...'),
          style: 'destructive'
        },
        {
          text: 'Show Message',
          onPress: () => this.setState({ showMessage: true })
        },
      ],
      {cancelable: false},
    )
  }



  render () {
    const { showMessage } = this.state
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.showAlert} style={styles.button}>
          <Text>SHOW ALERT</Text>
        </TouchableHighlight>
        {
          showMessage && <Text>Showing message - success</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
  },
  container: {
    justifyContent: 'center',
    margin: 20,
    borderColor:'#c7c7c7',
    borderWidth:2,
  },
})