import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Quize = ({navigation}) =>{
    const [qustion, setQuistion] = useState([]);
    const [quize, setQuize] = useState(0);
    const getQuize = async() =>{
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuistion(data.results)
    }
    useEffect(()=>{
        getQuize()
    },[])
 return(
     <View style={styles.container}>
  { qustion && <View style={styles.parent}>    
      <View>
       <Text style={styles.ques}>Q. Select currect option </Text>
       </View>
       <View style={styles.options}>
           <TouchableOpacity style={styles.opt}>
               <Text style={styles.q}>option 1</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.opt}>
               <Text style={styles.q}>option 2</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.opt}>
               <Text style={styles.q}>option 3</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.opt}>
               <Text style={styles.q}>option 4</Text>
            </TouchableOpacity>
       </View>
       <View style={styles.btn}>
           <TouchableOpacity onPress={() =>navigation.navigate("Home")} style={styles.button}>
               <Text style={styles.buttonText}>SKIP</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>navigation.navigate("Result")} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
       </View>
       </View>
       }
     </View>
     
 )
}

export default Quize;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%'
    },
    ques: {
        marginBottom: 12,
        fontSize: 20,
    },
    options: {
          marginBottom: 12,
          flex: 1,
    },
    btn: {
        margin: 12,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
       backgroundColor: '#1A759F',
       padding: 16,
       borderRadius: 15,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#FFF',
    },
    q: {
        fontSize: 15,
        color: 'white'
    },
    opt: {
        paddingVertical: 8,
        marginVerticalL: 5,
        backgroundColor: '#5DADE2',
        borderRadius: 10,
    },
    parent: {
        hight: '100%'
    }
})
