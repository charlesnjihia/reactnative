import React, { Component } from 'react'
import { TouchableOpacity, Text, View,StyleSheet,Image,TextInput,ScrollView } from 'react-native'

const AddressPresentationalComponent = (props) => {
	const placeholder = require('../../img/img_placeholder.png');
	state = {
     addressResp:[]	 
   }
	

   return (
   <ScrollView>
   { 
      props.address.map((add,i) => (   
		 
	
		
        <View key={i}  style = {styles.container}>
		
		<View style = {styles.address} >
			<Text style = {styles.addresstxt} >{add.propertyName}</Text>        
			<Text style = {styles.addresstxt} >{add.propertyNumber+" "+add.propertyNumber}</Text>
		</View>
		
		<View style = {styles.imgholder} >
		  
			{add.hasOwnProperty('AFL')&&add.AFL.hasOwnProperty('gatePhotoMedium')&&add.AFL.gatePhotoMedium.hasOwnProperty('url')  ? (
			<Image style={styles.image}  source = {{uri:add.AFL.gatePhotoMedium.url}} 
			  onError = {(e)=>{props.setDefaultImg }} />
			):(
			<Image style={styles.image}  source = {require('../../img/img_placeholder.png')}  />		
			)}
		</View>
		<View style = {props.statuses[i] ? styles.bottomviewpress : styles.bottomview}  ></View>
		
		{props.statuses[i]===true?(
			<View  style = {styles.floatview} >
			<TouchableOpacity  onPress = {props.shareTextMessage.bind(this,add.shortUrlCode)}>
			<Image  source = {require('../../img/img_wa.png')} />
			</TouchableOpacity>
			<TouchableOpacity  onPress = {props.shareTextMessage.bind(this,add.shortUrlCode)}>
			<Image  source = {require('../../img/img_sms.png')} />
			</TouchableOpacity>
			<TouchableOpacity  onPress = {props.shareTextMessage.bind(this,add.shortUrlCode)}>
			<Image  source = {require('../../img/img_email.png')} />
			</TouchableOpacity></View>
		  ):(
		    <View style = {styles.floatview} >
			<TouchableOpacity  onPress={props.upStatus.bind(this,i)}>
			<Image  source = {require('../../img/img_share.png')} />
			</TouchableOpacity>
			</View>
		  
            )}
		
		
		
	    </View>
	   
		
	  
	  ))
   }
	  </ScrollView>
	  
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
   bottomviewpress: { 
      height:145,   
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