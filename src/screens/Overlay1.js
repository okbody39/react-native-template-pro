import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Overlay1 extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>
          Overlay1
        </Text>
      </View>
    );
    
  }
  
}

Overlay1.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});