import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: 'https://storyset.com/illustration/questions/amico' }} style={styles.banner} resizeMode='contain' />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btn} >
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
  }
});
