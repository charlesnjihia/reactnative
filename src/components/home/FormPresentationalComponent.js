import React, { Component } from 'react'
import { TouchableOpacity, Text, View,StyleSheet,Image,TextInput } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

const FormPresentationalComponent = (props) => {
	
	
	

   return (
     <View style = {styles.container}>
	 <Spinner visible={props.visible} textContent={"Fetching Addresses..."} textStyle={{color: '#FFFFFF',fontWeight:'100',fontSize:10}} />
      	 <View style = {styles.logocontainer}>
			<Image source = {require('../../img/img_okhi.png')} />
			<Text style = {styles.beta}>PRIVATE BETA</Text>
		 </View>
		 <Text>Please enter your mobile number</Text>
		 <TextInput 
		 style = {styles.inputstyle} 
		 keyboardType = 'numeric' 
		 onChangeText = {props.setPhone}
		 value={props.phone}/>
		 <View style = {styles.butcontainer}>
		    <Text style = {styles.errormsg}>{props.error}
			</Text>
		    <View style = {styles.but}>
		       <TouchableOpacity  onPress = {props.fetchAddresses}>
		         <Image  source = {require('../../img/img_arrow.png')} />
		       </TouchableOpacity>
		    </View>
		 </View>
	 
	 
	  </View>
	  
   )

}

export default FormPresentationalComponent
const styles = StyleSheet.create ({
   myState: {
      marginTop: 20,
	  marginLeft: 20,
	  marginRight: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
   },
   container: {
      marginTop: 20,
	  marginLeft: 20,
	  marginRight: 20,
	  flexDirection:'column',
	  justifyContent:'flex-start'
	  
   },
   logocontainer: {      
	  flexDirection:'row',
	  justifyContent:'space-between',
	  alignItems:'center'
	  
   },
   inputstyle:{
	 color:'#9B9B9B'  
	   
   },
   beta:{
	   fontSize:10,
	   fontWeight:'100',
	   color:'#D8D8D8'
	   
   },
   butcontainer: {      
	  flexDirection:'row',
	  alignItems:'center'  
   },
   errormsg:{
	 flex:2, 
     color:'#C37E7C'	 
   },
   but:{
	flex:1,
	flexDirection:'row',
    justifyContent:'flex-end'
    	
   }
})