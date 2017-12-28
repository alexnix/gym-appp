import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import GroupScreen from './src/GroupScreen'

export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: AppScreen
  },
  Group: {
    screen: GroupViewScreen,
  }
}, { headerMode: 'screen' })
