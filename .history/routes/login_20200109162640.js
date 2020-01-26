import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';
import Juego from '..'

const screens = {
    Login: {
        screen: Login,
          navigationOptions: {
            header: null,
          }
    },
    Registro: {
        screen: Registro,
        navigationOptions: {
            header: null,
          }
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);