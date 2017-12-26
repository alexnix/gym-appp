import React from 'react';
import { Image, StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Expo from 'expo'
import {
  StackNavigator,
} from 'react-navigation';

class App extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const groups = [
      {
        color: "#900C3E",
        name: 'Arms',
        image: require('./assets/Arms.png'),
      }, {
        color: "#571845",
        name: 'Chest',
        image: require('./assets/Chest.png'),
      }, {
        color: "#C70039",
        name: 'Back',
        image: require('./assets/Back.png'),
      }, {
        color: "#FF5733",
        name: 'Legs',
        image: require('./assets/Legs.png'),
      }, {
        color: "#900C3E",
        name:  'Abs',
        image: require('./assets/Abs.png'),
      }, {
        color: "#571845",
        name: 'Shoulders',
        image: require('./assets/Shoulders.png'),
      }, {
        color: "#C70039",
        name: 'Cardio',
        image: require('./assets/Cardio.png'),
      }, {
        color: "#FF5733",
        name:  'Stretching',
        image: require('./assets/Stretching.png'),
      }
    ];
    var rows = [];

    for(var i = 0; i <= groups.length - 2; i += 2) {
      let g1 = groups[i].name, g2 = groups[i+1].name
      let g1_img = groups[i].image, g2_img = groups[i+1].image
      rows.push(
        <View key={i} style={styles.row}>

          <TouchableOpacity activeOpacity={1} style={group_button_style(groups[i].color)}
            onPress={() => {
              this.props.navigation.navigate('Group', {
                group_name: g1
              })
            }}>
            <Image
              style={{width: 65, height: 65}}
              source={g1_img}
            />
            <Text>{groups[i].name}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={group_button_style(groups[i+1].color)}
            onPress={() => {
              this.props.navigation.navigate('Group', {
                group_name: g2
              })
            }}>
            <Image
              style={{width: 65, height: 65}}
              source={g2_img}
            />
            <Text>{groups[i + 1].name}</Text>
          </TouchableOpacity>

        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {rows}
        </ScrollView>
      </View>
    );

  }
}

class GroupView extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on {this.props.navigation.state.params.group_name} group page</Text>
        <Text onPress={() => {
            this.props.navigation.navigate('Home')
          }}>Back to Home</Text>
      </View>
    )
  }
}

function group_button_style(color) {
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

const styles = StyleSheet.create({
  container: {
    // marginTop: Expo.Constants.statusBarHeight,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center'
  },
});


export default StackNavigator({
  Home: {
    screen: App
  },
  Group: {
    screen: GroupView,
  }
}, { headerMode: 'screen' })