import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';


const screens = {
    Login: {
        screen: Login,
          navigationOptions: {
            header: null,
          }
    },
    Registro: {
        screen: Registro,
        

export default createAppContainer(LoginStack);