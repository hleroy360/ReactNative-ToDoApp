import React, { Component } from 'react'
import { TextInput, Clipboard, TouchableHighlight, View, 
         Text, StyleSheet } from 'react-native'

//let styles = {}

export default class TestClipboard extends Component {
  constructor() {
    super()
    this.state = {
      clipboardData: []
    }
    this.pushClipboardToArray = this.pushClipboardToArray.bind(this)
  }
  componentDidMount () {
    Clipboard.setString('Hello World! ');
  }
  updateClipboard (string) {
    Clipboard.setString(string);
  }
  async pushClipboardToArray() {
    const { clipboardData } = this.state
    var content = await Clipboard.getString();
    clipboardData.push(content)
    this.setState({clipboardData})
  }
  render () {
    const { clipboardData } = this.state
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testing Clipboard</Text>
        <TextInput style={styles.input} 
                   onChangeText={
                       (text) => this.updateClipboard(text)
                   } />
        <TouchableHighlight onPress={this.pushClipboardToArray}
                            style={styles.button}>
          <Text>Click to Add to Array</Text>
        </TouchableHighlight>
        {
          clipboardData.map((d, i) => {
            return <Text key={i}>{d}</Text>
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
    marginBottom:20,
    borderTopWidth:2,
    borderBottomWidth:2
  },
  input: {
    padding: 10,
    marginTop: 15,
    height: 40,
    backgroundColor: '#dddddd'
  },
  button: {
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
  }
})