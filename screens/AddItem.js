
import React, {useState} from 'react';
import{View,Text,TextInput,TouchableHighlight}from "react-native";

import database from '@react-native-firebase/database'


let addItem = item =>{
  database().ref('/items').push({
    name:item
  })
}
function AddItem(){
  const[name,setName]= useState('');
  const handlesubmit = ()=>{
    addItem(name);
    setName('');
    Alert.alert('item Saved Successfully');
  }
  return(
    <View style={styles.main}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput style={styles.iteminput} value={name} onChangeText={text=>setName(text)}/>
      <TouchableHighlight style={styles.button} onPress={handlesubmit}>
          <Text style={styles.buttontext}>Add</Text>
      </TouchableHighlight>
    </View>

  );
}


const styles =StyleSheet.create({

  main:{
    flex:1,
    padding:30,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#6565fc'
  },
  title:{
    marginBottom:'column',
    fontSize:25,
    textAlign:'center',
  },
  iteminput:{
    height:50,
    padding:4,
    marginRight:5,
    fontSize:23,
    borderWidth:1,
    borderColor:'white',
    borderRadius:8,
    color:'white'

  },
  buttontext:{
    fontSize:18,
    color:'#111',
    alignSelf:'center'
  },
  button:{
    height:45,
    flexDirection:'center',
    backgroundColor:'#fff',
    borderColor:'#fff',
    borderWidth:1,
    borderRadius:8,
    marginBottom:10,
    marginTop:10,
    alignSelf:'strech',
    justifyContent:'center'
  }


})

export default AddItem