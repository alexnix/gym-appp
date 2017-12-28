import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { styles } from './styles'

export default class GroupScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on {this.props.navigation.state.params.group_name} group page {this.props.navigation.state.params.color}</Text>
        <Text onPress={() => {
            this.props.navigation.navigate('Home')
          }}>Back to Home</Text>
      </View>
    )
  }
}
