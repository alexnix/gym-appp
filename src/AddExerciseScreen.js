import React from 'react'
import { 
    View,
    FlatList,
 } from 'react-native'
import * as firebase from 'firebase'
import credentials from './credentials'

class NewExercise extends React.Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        )
    }
}

export default class AddExerciseScreen extends React.Component {
    state = {
        exercises: []
    }

    constructor() {
        super()
        firebase.initializeApp(credentials.FIREBASE_CONFIG)
        firebase
            .database()
            .ref(`exercises/${this.props.forGroup.toLowerCase()}`)
            .once('data')
            .then((snap) => {
                this.setState({
                    exercises: snap.val()
                })  
            })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.exercises}
                    renderItem={(item) => <NewExercise name={item} />}
                />
            </View>
        )
    }
}