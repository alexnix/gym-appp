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
import db from './database'

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

  state = {
    exercises: []
  }

  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on {this.props.navigation.state.params.group_name} group page {this.props.navigation.state.params.color}</Text>
        <Text onPress={() => {
            this.props.navigation.goBack()
          }}>Back to Home</Text>

          {/* <FlatList
            data={[{key: 'Ramat spate'}, {key: 'Deadlifts'}]}
            renderItem={({item}) => <ActiveExercise myOnPress={() => {
              this.props.navigation.navigate('ExerciseScreen', {
                forGroup: this.props.navigation.state.params.group_name
              })
            }} name={item.key} /> }
          /> */}

          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('AddExercise', {
                forGroup: this.props.navigation.state.params.group_name
              })
            }}
          >  
            <Text>Add exercise to this group</Text>
          </TouchableWithoutFeedback>
      </View>
    )
  }
}
