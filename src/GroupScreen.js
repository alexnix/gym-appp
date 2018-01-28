import React from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { styles } from './styles'

class ActiveExercise extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.myOnPress()
        }}
      >
        <View>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default class GroupScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on {this.props.navigation.state.params.group_name} group page {this.props.navigation.state.params.color}</Text>
        <Text onPress={() => {
            this.props.navigation.goBack()
          }}>Back to Home</Text>

          <FlatList
            data={[{key: 'Ramat spate'}, {key: 'Deadlifts'}]}
            renderItem={({item}) => <ActiveExercise myOnPress={() => {
              this.props.navigation.navigate('AddExercise', {
                forGroup: this.props.navigation.state.params.group_name
              })
            }} name={item.key} /> }
          />

          <Text>  
            Add exercise to this group
          </Text>
      </View>
    )
  }
}
