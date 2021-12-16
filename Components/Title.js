import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



  const Title = () => {
    return (
      <View>
        <Text style={styles.title}>Quize App</Text>
      </View>
    );
  }


export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#2B547E',
    justifyContent: 'center',
    alignItems: 'center',
  }
    
});





