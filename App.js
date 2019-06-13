import React from 'react';
import { View, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import TabNavigatorScreen from './TabNavigator/index'


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'ReactNative TabNavigator'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View  style={{ marginBottom: 20}}>
        <Button
          title="The Godfather"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              title: "The Godfather",
            })
          }
        />
        </View>
        <View>
        <Button
          title="Forest Gump"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              title: "Forest Gump",
            })
          }
        />
        </View>
        
      </View>
    )
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: TabNavigatorScreen,
  },
}, {
    initialRouteName: 'Home',
  })

export default createAppContainer(AppNavigator)