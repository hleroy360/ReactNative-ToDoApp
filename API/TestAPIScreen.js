import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Dimensions } from 'react-native';

import TestAlert from './TestAlert'
import TestClipboard from './TestClipboard';

const {width, height} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width

const TestAPIScreen = ({ navigation }) => {

  return (
    <View>
      <Button
        title="Go Back"
        onPress={() =>
          navigation.goBack()
        }
      />
      <TestAlert style={{margin:20}}/>
      <TestClipboard />
      <View style={{margin:20, borderTopWidth:2,}}>
        <Text>Dimensions</Text>
        <Text>{width}</Text>
        <Text>{height}</Text>
        <Text>{windowWidth}</Text>
      </View>
    </View>
  );
};


export default TestAPIScreen
