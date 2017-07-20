import React,{ Component } from 'react'
import { Text, BackHandler, Platform } from 'react-native';
/* import share module to allow sharing */
import { Share } from 'react-native'  

/* two view components each shown depending on state */
import FormPresentationalComponent from './FormPresentationalComponent'
import AddressPresentationalComponent from './AddressPresentationalComponent'
class Home extends Component {
	 constructor() {
    super();
    this.setStatuses = this.setStatuses.bind(this);
  }
  
	
	 /*declare state variables */
	state = {
     phoneNum:'',
	 /* to display any error encountered */
     error:'',
	 /* has fetched determines which view to display */
	 hasFetched:false,
	 /* visible determines if the spinner is visible */
	 visible:false,
	 /* to list the addresses if the request is successful */
     addressResp:[],
	 statuses:[],
	 share:false,
	 pressStatus: false,
     img:{uri:'https://cdn-images-1.medium.com/max/800/1*0Gl4TglvSA1WATBmexQAiw.jpeg'}
    //img:require('../../img/img_placeholder.png')	 
   }
   //share message 
   shareTextMessage= (address) =>{
    Share.share({
      title: 'Best title ever!',
	  message: 'http://codingmiles.com',
	  "social": "whatsapp"
	  
    })
    .then(this._showResult)
    .catch(err => console.log(err))
  }
   
   //set the status for each of the address
   setStatuses=()=>{
	this.setState({statuses:[]});    
   console.log('came to the function');
	for(var i=0;i<this.state.addressResp.length;i++){
     this.state.statuses.push(false);
	 console.log('inside looping');
	} 
	   
   }
   /* update the statues boolean value to show share buttons */
   updateStatuses=(index)=>{
	   console.log('update called with index'+index);
	   
	   var localState=[];
	   localState=this.state.statuses;
	   for(var i=0;i<this.state.addressResp.length;i++){
		if(i==index){
         localState.splice(i, 1, true); 
		}else{
		localState.splice(i, 1, false);	
		}
		} 
	   
	 //this.state.statuses.splice(i, 1, false);
	 this.setState({statuses:localState}); 
   }

   
   
   /* function to set the phone variable passed from the text input */
   setPhone=(txt)=>{
	this.setState({ phoneNum: txt }) ;
	
	
   }
   /* used to set the default img in case there is no image for the address */
   setDefaultImg=()=>{
	this.setState({ img: require('../../img/img_placeholder.png')}) ;   
   }
   /* used to show the whatsapp,email and sms buttons */
   shareAddress = () => {
   this.setState({ share: true}) ;   
   }
   /* used to show the whatsapp,email and sms buttons */
   pressBut = () => {
   this.setState({ pressStatus: true}) ; 
   this.setState({ share: true}) ;   
   }
   
   
   /* use the provided phone number to fetch the addresses from the server via http */
   fetchAddresses=()=>{
	this.setState({ phoneNum: '+254725855822'}) ;     
	  
	   /* if phone number is not set show error */
	 if(this.state.phoneNum==''){
      this.setState({ error: 'Enter a phone number to search address!' }) ;
     }else{
	 /* if the first digit is 0 replace it with +254 */
		var ch=this.state.phoneNum.charAt(0);
		if(ch=='0'){    
		this.setState({ phoneNum: '+254'+this.state.phoneNum.substring(1)}) ;
			
		}		 
		 
		 
		 
		 
	  /* set the spinner visible */ 
	  this.setState({ visible: true }) ; 
      
	  /* make a http post request using phone number as the argument */
	  var details = {
       'phone': this.state.phoneNum
    	};
		var formBody = [];
		for (var property in details) {
		  var encodedKey = encodeURIComponent(property);
		  var encodedValue = encodeURIComponent(details[property]);
		  formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");
	         
	  fetch('https://okhi-ext.back4app.io/getAddressesByPhone', {
		  method: 'POST',
		  headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
		  body:formBody
		})
		.then((response) => response.json())
		.then((responseJson) => {
			
			if(responseJson.error){
			 /* hide the spinner */
		     this.setState({ visible: false }) ; 	
			 /* update error to inform the user does not exist */
			 this.setState({ error: 'Sorry that user does not exist'}) ;	
				
			}else{
			 /* update the address list with the addresses returned */	
			 this.setState({ addressResp: responseJson}) ;
			 console.log('fetching happened well');
			 /* for each address set to false to hide share */
			 this.setStatuses();
			  console.log('after calling statuses func..address follows');
			   console.log(this.state.addressResp);
			   console.log(this.state.statuses);
			 /* hide the spinner */
		     this.setState({ visible: false }) ; 			 
			 /* update the fetchstate to change the view */
			 this.setState({ hasFetched: true}) ;			 
			
            }
        
      })
      .catch((error) => {
		  /* hide the spinner */
		  this.setState({ visible: false }) ; 
		  
		  /*display the error that is ecountered during fetch */
        this.setState({ error: error.message}) ;
		 throw error;
      });  
	  

		
		 
	 }
	 
	   
	 
	
   }
   /* render either the form or the address list depending on the fetch state */
   render() { 
	if (this.state.hasFetched==false) {   
   return (
       <FormPresentationalComponent fetchAddresses={this.fetchAddresses} setPhone={this.setPhone} goToAbout={this.goToAbout} visible={this.state.visible} error={this.state.error} phone={this.state.phoneNum}/>
	)}else{
	return (
	<AddressPresentationalComponent nums={this.nums} address={this.state.addressResp} img={this.state.img} setDefaultImg={this.setDefaultImg} share={this.state.share} shareAdd={this.shareAddress} pressBut={this.pressBut} pressStatus={this.state.pressStatus}  statuses={this.state.statuses} upStatus={this.updateStatuses}  shareTextMessage={this.shareTextMessage}  />	
	)
   }
   }
   /* override the back button to return to the form screen */
	componentWillMount(){	
    BackHandler.addEventListener('hardwareBackPress', () => {
	   this.setState({ phoneNum:''}) ;
	   this.setState({ error:''}) ;
       this.setState({ hasFetched: false}) ;
	   this.setState({ share: false}) ; 
       this.setState({ pressStatus: false}) ; 	   
        return true;		
         
        
    });
}

}

export default Home