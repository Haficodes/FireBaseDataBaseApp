import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,button, Button} from 'react-native';



export default function Login(){

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  
      
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'
      placeholder="Email"/>
      <TextInput style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="Password"
      secureTextEntry={true}/>

      <View style={styles.Button}>
        <Button title='sighnup'/>
        <Button title='Login'/>
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:21,
    marginBottom:20,
  },
  input:{
    width:300,
    borderRadius:6,
    borderWidth:2,
    borderColor:'#6D69C3',
    marginVertical:10,
    padding:15

  },
  Button:{
    width:150,
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-around'
  }
})