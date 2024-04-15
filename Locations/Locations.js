import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { removeLocation } from '../Redux/Actions'
import { connect } from 'react-redux'


class Locations extends Component {
  removeLocation = (location) => {
    this.props.dispatchRemoveLocation(location)
  }
  render(){
    const { locations } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.locationContainer}>
          {
            locations.map((location, index) => (
              <View style={styles.locations} key={index}>
                <Text style={styles.name}>Name: {location.name}</Text>
                <Text style={styles.text}>Latitude: {location.originalCoords.latitude}</Text>
                <Text style={styles.text}>Longitude: {location.originalCoords.longitude}</Text>
                <Text style={styles.text}>ID: {location.id}</Text>
                <Text onPress={()=> this.removeLocation(location)}>Remove</Text>
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
  locationContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  locations: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  text: {
    fontSize: 14,
    color: '#999'
  }
})


const mapStateToProps = state => ({
  locations: state.locationReducer.locations
})
const mapDispatchToProps = {
  dispatchRemoveLocation:(location) => removeLocation(location)
}
export default connect(mapStateToProps, mapDispatchToProps)(Locations);