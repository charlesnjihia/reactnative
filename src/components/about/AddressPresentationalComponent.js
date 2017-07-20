import React, { Component } from 'react'
import { TouchableOpacity, Text, View,StyleSheet,Image,TextInput,ScrollView } from 'react-native'

const AddressPresentationalComponent = (props) => {
	const placeholder = require('../../img/img_placeholder.png');
	state = {
     addressResp:[]	 
   }
	

   return (   
		
        <View style = {styles.container} >		
			<View style = {styles.address} >
				<Text style = {styles.addresstxt} >Property Name</Text>        
				<Text style = {styles.addresstxt} >Property Num</Text>
			</View>
			<View style = {styles.imgholder} >
				
				<Image style={styles.image}  source = {require('../../img/img_placeholder.png')} />		
				
			</View>
			<View style = {styles.bottomview}  ></View>
			<View style = {styles.floatview} >
			<TouchableOpacity  onPress = {props.shareAdd}><Image  source = {require('../../img/img_share.png')} />
			</TouchableOpacity>
			</View>	
		    {props.share &&
			<View  style = {styles.floatview} >
			<TouchableOpacity  onPress = {props.shareWap}>
			<Image  source = {require('../../img/img_wa.png')} />
			</TouchableOpacity>
			<TouchableOpacity  onPress = {props.shareWap}>
			<Image  source = {require('../../img/img_sms.png')} />
			</TouchableOpacity>
			<TouchableOpacity  onPress = {props.shareAdd}>
			<Image  source = {require('../../img/img_email.png')} />
			</TouchableOpacity></View>
		 
            }
		
		
	    </View>
   )

}

export default AddressPresentationalComponent
const styles = StyleSheet.create ({
   
   container: {      
	  flexDirection:'column',
	  justifyContent:'flex-start',
	  alignItems:'stretch',
	  flex:1
	  
   },
  address:{
	backgroundColor:'#4A4A4A',
	padding:20	
   },
   addresstxt:{

	color:'#FFFFFF'
	
   },
   imgholder:{
	flex:1,
	justifyContent:'flex-start',
	alignItems:'stretch'   
   },
    image: {
		flex:1,        
        height: 150,
		resizeMode:'stretch',
		overflow:'visible',
		resizeMode: 'cover'
    },
   bottomview: { 
      height:50,   
	  flexDirection:'row',
	  justifyContent:'space-between',
	  alignItems:'center',
	  
	  
   },
    floatview: {
        position: 'absolute',
        bottom: 25,
        right: 10,
        
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