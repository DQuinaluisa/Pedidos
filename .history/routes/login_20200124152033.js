import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';
import Juego from '../screens/inicio';

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
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            Title: 'BINGO'
        }
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);