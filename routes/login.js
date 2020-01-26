import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';
import Inicio from '../screens/inicio';
import Actualizar from '../screens/actualizar';
import Pedidos from '../screens/pedidos';

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
            headerShown: false,
        }
    },
     Actualizar: {
        screen: Actualizar,
        
    },
    Pedidos: {
        screen: Pedidos,
       
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);