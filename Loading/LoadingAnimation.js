import React, { Component } from 'react';
import {
  Easing,
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
} from 'react-native';


class LoadingAnimation extends Component{
  //added another componentDidMount
  //brought my animation from a static image to a rotating one
  componentDidMount() {
    this.animate()
  }
  //Animation loop code for the rotation
  animatedRotation = new Animated.Value(0);
  animate=()=>{
    Animated.loop(
      Animated.timing(
        this.animatedRotation,
        {
          toValue: 1,
          duration: 1800,
          easing: Easing.linear,
        }
      )
    ).start()
  }
  render(){
    //the render animation code that is passed to the return()
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    return(     
        <View style={styles.container}>         
          <Animated.Image      
            source={require('../assets/loading-circle.png')}      
            style={{ width: 40, 
                      height: 40, 
                      transform: [{ rotate: rotation }] }}      
            />          
        </View>      
    );
  }
}
  
  export default LoadingAnimation
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 50,
    },
  });
 