import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

export default class Information extends Component {

  render() {
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{fontSize: 23}}>This is the info screen</Text>
     </View>
    )
  }
}

