
import {createBottomTabNavigator} from 'react-navigation'
import InformationScreen from './Information'
import CastScreen from './Cast'

const TabNavigator = createBottomTabNavigator({
  InformationScreen: {
    screen: InformationScreen,
    navigationOptions: {
      tabBarLabel:  'Info',
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 20,
        }
      }
    },
  },
  CastScreen: {
    screen: CastScreen,
    navigationOptions: {
      tabBarLabel: 'Cast',
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 20,
        }
      }
    }
  }
})

TabNavigator.navigationOptions = ({navigation}) => {
  const headerTitle = navigation.state.params.title
  return {
    headerTitle
  }
}

export default TabNavigator
