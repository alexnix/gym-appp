import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import GroupScreen from './src/GroupScreen'
import AddExerciseScreen from './src/AddExerciseScreen';

export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Group: {
    screen: GroupScreen,
  },
  AddExercise: {
    screen: AddExerciseScreen
  }
}, { headerMode: 'screen' })
