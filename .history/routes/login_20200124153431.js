import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';
import Inicio from '../screens/inicio';

const screens = {
    Login: {
        screen: Login,
          navigationOptions: {
            Title: 'Inicio de Sesion', 
          }
    },
    Registro: {
        screen: Registro,
        
    },
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            Title: 'Inicio', 
            
        }
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);