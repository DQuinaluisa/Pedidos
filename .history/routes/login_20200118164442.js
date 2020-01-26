import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/';
import Registro from '../screens/register';
import Juego from '../screens/juego';

const screens = {
    Login: {
        screen: Login,
          navigationOptions: {
            headerShown: false,
          }
    },
    Registro: {
        screen: Registro,
        
    },
    Juego: {
        screen: Juego,
        navigationOptions: {
            Title: 'BINGO'
        }
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);