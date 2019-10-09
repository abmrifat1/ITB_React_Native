import React, { Component } from 'react';
import { Text,StyleSheet, TextInput,View ,TouchableOpacity,CheckBox} from 'react-native';


export default class HelloWorldApp extends Component {
         
  render() {
    var test="hi tanvir";
    return (

      
      <View style={styles.container}>
        <Text>{test}</Text>
      <Text style={styles.loginFront}>Login</Text>
      <Text style={styles.first}>Don't have an account? <Text style={styles.span}>Create an account</Text></Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="User Name"/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password" secureTextEntry={true}/>
        </View>
        <View style={{}}>
                <CheckBox selected=""/>               
            </View><Text style={styles.check}>  Remember Me       <Text>Forgot Password?</Text></Text>
         <TouchableOpacity style={styles.buttonContainer}>
             <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
       <Text style={styles.anotherOption}>Or Login with</Text>
       <TouchableOpacity style={styles.buttonContainer}>
       <Text style={styles.f}>f</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
  //  flex: 1,
  marginTop:20,
    justifyContent: 'center',
   // backgroundColor: '#FFFFFF',
    marginLeft:60,
  },
  inputContainer: {
    borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  f:{
    backgroundColor:'#216BDB',
       color:"#FFFFFF",
       textAlign: 'center',
       fontSize:20,
       padding:5,
       borderRadius: 50,
      paddingRight:20,
      paddingLeft:20,
      marginLeft:5,
      fontWeight:'700'
  },
 buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
        backgroundColor:'#216BDB',
        padding:15,
        fontSize:17,
        paddingLeft:60,
        paddingRight:60,
        borderRadius: 40,
    },
    check:{
      marginTop:-25,
      marginLeft:25,
      paddingBottom:20
    },
  loginFront:{
  fontWeight: '700',
  fontSize:30,
  marginTop:40,
  color:"#508FC7"
  },
  anotherOption:{
  // textAlign: 'center',
   fontSize:12,
   marginLeft:90,
   color:"#46474D"
  },
  first:{ 
   marginBottom:30
},
  span:{
  color:"#F24455",
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    padding:5
  },
  loginText: {
    color: 'white',
  }
});
