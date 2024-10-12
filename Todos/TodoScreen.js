import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Todos from './Todos';

const TodoScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Todos/>
      <View style={styles.addTodo}>
        <Button
          title="Add Todo"
          onPress={() =>
            navigation.navigate('Add Todo')
          }
        />
      </View>
      <View>
        {/*<Button
          title="Test API"
          
          onPress={() =>
            navigation.navigate('Test API')
          }
        />*/}
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  addTodo: {
    marginBottom:20
  }
});

export default TodoScreen
