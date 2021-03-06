
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Contact Card
//
// For this composition you'll have to use everything you have
// learned so far.
//
// Hints:
// - Use flex-start, flex-end, stretch as alignment values as needed
// - Some times constraining with margin and padding of parents vs children
// is much better than specifying heights and widths
// - There's no such thing as purely black shadow in nature. This is
// the shadow color you should use: #175E4C, with opacity 0.7, offsets 2(w), 6(h)
//

// copied solution to get exact dimensions, attempt is below commented out
const ContactCard = (props)=>{
  return (
    <View style={[styles.container, {alignItems:'stretch'}]}>
      <View style={{margin:10, shadowRadius:10,shadowColor:'#175E4C', shadowOffset:{width:2, height:6},shadowOpacity:0.7, backgroundColor:'#2ABB9B', padding:20}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:80, height:80, borderRadius:40, backgroundColor:'#229E85'}} />
          <View style={{marginLeft:20, paddingTop:10, alignItems:'flex-start'}}>
            <Text style={styles.text}>Chuck Norris</Text>
            <Text style={styles.text}>CEO</Text>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{color:'white'}}><Icon name="ios-call-outline" size={16}/> 481-5162342</Text>
          <Text style={{color:'white'}}><Icon name="ios-send-outline" size={16}/> chuck@norrisfamily.arpa</Text>
        </View>
      </View>
    </View>
  )
}


// attempt is close enough...

// const ContactCard= (props)=>{
//   return (
//     <View style={[styles.container, {alignItems:'stretch'}]}>
//       <View style={{backgroundColor:'#2ABB9B', margin: 10, padding: 10, shadowColor: '#175E4C', shadowOffset: {width: 2, height: 6}, shadowOpacity: 0.7}}>
//         <View style={{flexDirection:'row'}}>
//           <View style={{width:80, height:80, borderRadius:40, backgroundColor:'#229E85', margin: 15}}>
//           </View>
//           <View style={{alignItems:'flex-start', justifyContent:'center', paddingBottom: 30}}>
//             <Text style={styles.text}>Chuck Norris</Text>
//             <Text style={styles.text}>CEO</Text>
//           </View>
//         </View>
//         <View style={{padding: 10}}>
//           <Text style={{color:'white'}}><Icon name="ios-call-outline" size={16}/> 481-5162342</Text>
//           <Text style={{color:'white'}}><Icon name="ios-send-outline" size={16}/> chuck@norrisfamily.arpa</Text>
//         </View>
//       </View>
//     </View>
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[2],
  },
  text:{
    color: 'white',
    textAlign:'center'
  },
  divider: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
});





ContactCard.displayName = 'ContactCard'
export default ContactCard

