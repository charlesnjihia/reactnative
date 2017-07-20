import React,{ Component } from 'react'
import { Text } from 'react-native';
/* for navigation */
import { Actions } from 'react-native-router-flux';
/* render view from the presentational component */
import PresentationalComponent from './PresentationalComponent'


class Splash extends Component {
	/* once the view has shown set time out to call the home component */
    componentDidMount () {
    setTimeout (() => {
            this.props.navigation.navigate('Home');
        }, 3000);
    }  
   render() {
   return (
       <PresentationalComponent />
   )
   }
}

export default Splash