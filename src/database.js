import * as firebase from 'firebase'
import credentials from './credentials'

firebase.initializeApp(credentials.FIREBASE_CONFIG)

export default firebase