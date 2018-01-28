import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  styles,
  group_button_style,
} from './styles'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const groups = [
      {
        color: "#900C3E",
        name: 'Arms',
        image: require('./../assets/Arms.png'),
      }, {
        color: "#571845",
        name: 'Chest',
        image: require('./../assets/Chest.png'),
      }, {
        color: "#C70039",
        name: 'Back',
        image: require('./../assets/Back.png'),
      }, {
        color: "#FF5733",
        name: 'Legs',
        image: require('./../assets/Legs.png'),
      }, {
        color: "#900C3E",
        name:  'Abs',
        image: require('./../assets/Abs.png'),
      }, {
        color: "#571845",
        name: 'Shoulders',
        image: require('./../assets/Shoulders.png'),
      }, {
        color: "#C70039",
        name: 'Cardio',
        image: require('./../assets/Cardio.png'),
      }, {
        color: "#FF5733",
        name:  'Stretching',
        image: require('./../assets/Stretching.png'),
      }
    ];
    var rows = [];

    for(var i = 0; i <= groups.length - 2; i += 2) {
      let g1 = groups[i].name, g2 = groups[i+1].name
      let g1_img = groups[i].image, g2_img = groups[i+1].image
      let g1_color = groups[i].color, g2_color = groups[i+1].color;
      rows.push(
        <View key={i} style={styles.row}>

          <TouchableOpacity activeOpacity={1} style={group_button_style(groups[i].color)}
            onPress={() => {
              this.props.navigation.navigate('Group', {
                group_name: g1,
                color: g1_color
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
                group_name: g2,
                color: g2_color
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
