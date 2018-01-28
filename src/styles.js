import { StyleSheet, Dimensions } from 'react-native'

export function group_button_style(color) {
    return {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      width:  Dimensions.get('window').width * 0.5,
      height: Dimensions.get('window').width * 0.5
    }
}

export const styles = StyleSheet.create({
  container: {
    // marginTop: Expo.Constants.statusBarHeight,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  login_container: {
    backgroundColor: "#FFC300",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
