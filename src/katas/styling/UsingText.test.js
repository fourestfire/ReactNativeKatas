
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Using Text
//
// Styling text in React Native can get
// very expressive.
//
// Hints:
// - Text can go inside parent Texts
// - https://facebook.github.io/react-native/docs/text.html
// - http://iosfonts.com/
//

const UsingText= (props)=>{
  return (
    <View style={styles.container}>
      <Text style={styles.topFont}>Using</Text>
      <Text style={styles.bottomFont}>T
        <Text style={styles.bottomFontExtra}>
          ext
        </Text>
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[1],
  },
  topFont: {
    fontFamily:'AmericanTypewriter',
    fontSize:100
  },
  bottomFont: {
    color:'white',
    letterSpacing:-20,
    fontSize:100,
    fontStyle:'italic',
    fontFamily:'Baskerville'
  },
  bottomFontExtra: {
    fontSize:60,
    letterSpacing:0
  }

});





UsingText.displayName = 'UsingText'
export default UsingText

