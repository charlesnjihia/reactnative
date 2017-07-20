import React, { Component } from 'react'
import { Text, View,StyleSheet,Image} from 'react-native'

const PresentationalComponent = (props) => {
   return (
     <View style = {styles.container}>
		 <View style = {styles.logocontainer}>
			<Image source = {require('../../img/img_kora.png')} />			
		 </View>
		 <Text style = {styles.footer}>Powered by OkHi</Text>
		
	 </View>
	  
   )
}

export default PresentationalComponent
const styles = StyleSheet.create ({
  
   container: {  
	  justifyContent:'center',
	  backgroundColor:'#9B9B9B',
	  alignItems:'center',
	  flex:1
	  
   },
   logocontainer: {      
	  flex:1,
	  justifyContent:'center',
	  
	  
   },
   footer:{
	 color:'#FFFFFF',
     fontWeight:'100'	 
	   
   },
   beta:{
	   fontSize:10
	   
   }
});