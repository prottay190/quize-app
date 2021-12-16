import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Title from '../Components/Title';


const Home = ({navigation}) =>{
 return(
     <View style={styles.container}>
      <Title></Title>
      <View style={styles.bannerContainer}>
        <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAijnmm9QUWqcakhXL1cLu4YpbfaPIB1wKaA&usqp=CAU' }} style={styles.banner} resizeMode='contain' />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("Quize")} style={styles.btn} >
          <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
     </View>
     
 )
}

export default Home;

const styles = StyleSheet.create({
    banner: {
      height: 300,
      width: 300,
    },
    bannerContainer: {
         justifyContent: 'center',
         alignItems: 'center'
    },
    container: {
      padding: 30,
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: '25px',
      color: '#fff',
      backgroundColor: '#2980B9',
      padding: '10px 15px',
      borderRadius: '10px'
      
    }
})
