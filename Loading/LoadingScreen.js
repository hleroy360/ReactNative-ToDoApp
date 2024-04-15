import React, { Component, setState } from 'react';
import {
  Easing,
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingAnimation from './LoadingAnimation';


const LoadingScreen = ({navigation}) => {
  //initial state
  const state = {
    loading: true,
  }
  
  //navigates to Todos after 2s
  function componentDidMount() {
    setTimeout(() => {
      navigation.replace('Todos');
    }, 2000);
  }

  const { loading } = state;
  //if component loads, then run componentDidMount()
  //and return <LoadingAnimation/>
  if(loading == true) {
    componentDidMount()
    return(
      <LoadingAnimation/>
    );
  }

}



export default LoadingScreen