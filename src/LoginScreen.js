import React from 'react';
import {
  Image,
  View,
  Button,
} from 'react-native';
import { AppLoading } from 'expo'
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase'
import credentials from './credentials'
import { styles } from './styles'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    noAuthData: true,
  }

  constructor() {
    super()
    firebase.initializeApp(credentials.FIREBASE_CONFIG)
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // connected
        console.log(user)
        // User.uuid = user.uuid
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'})
            ]
          })
        )
      } else {
        // disconnected
        this.setState({noAuthData: false})
      }
    })
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      credentials.FACEBOOK_APP_ID,
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
        console.log(error)
      });
    }
  }

  render() {
    if(this.state.noAuthData) {
      return (
        <AppLoading/>
      )
    }

    return (
      <View style={styles.login_container}>
        <Button
          title="Login With Facebook"
          onPress={this.loginWithFacebook}
        />
      </View>
    )
  }
}
