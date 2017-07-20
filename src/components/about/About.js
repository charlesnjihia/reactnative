import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import AddressPresentationalComponent from './AddressPresentationalComponent'
import Share, {ShareSheet, Button} from 'react-native-share';
class About extends Component { 

state = {
	share:false,
	 visible: false,
	 shareOptions : {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    }
	
}
onCancel() {
    
    this.setState({visible:false});
  }
   

/*sendSms(text){
	var SendIntentAndroid = require('react-native-send-intent');
	SendIntentAndroid.sendText({
  title: 'Please share this text',
  text: 'Lorem ipsum dolor sit amet, per error erant eu, antiopam intellegebat ne sed'
});	}
*/

shareWap=()=>{
             // this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(this.state.shareOptions, {
                  "social": "whatsapp"
                }));
              },300);
            }



  shareAddress = () => {
   this.setState({ share: true}) ;   
   }
render() { 
   return (
      <AddressPresentationalComponent shareAdd={this.shareAddress} shareWap={this.shareWap}share={this.state.share}/>
   )
}
}

export default About