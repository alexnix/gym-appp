import React from 'react'
import { 
    View,
    Text,
    FlatList,
 } from 'react-native'
import firebase from './database'

class NewExercise extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

export default class AddExerciseScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    state = {
        exercises: []
    }

    componentDidMount() {
        firebase
            .database()
            .ref(`exercises/${this.props.navigation.state.params.forGroup.toLowerCase()}`)
            .once('value')
            .then((snap) => {
                console.log(snap.val())
                this.setState({
                    exercises: snap.val()
                })  
            })
    }

    render() {
        return (
            <View>
                <Text>bla</Text>
                <FlatList
                    data={this.state.exercises}
                    renderItem={(i) => <NewExercise name={i.item} />}
                />
            </View>
        )
    }
}