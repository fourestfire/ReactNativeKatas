
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const settings =  {
  "Name":"Chuck Norris",
  "Address":"56th Lowkick Ave., Texas",
  "Phone":"481-5162342",
  "Email":"chuck@norrisfamily.arpa",
}

// Profile Screen
//
// For this composition you'll have to use everything you have
// learned so far.
//
// Hints:
// - Fonts have weights
// - Don't be afraid to use explicit width values when needed (instead of flex based)
// - Components can alignSelf
//
// interesting below that fontWeight has to be a string - i guess because it takes bold and normal as valid inputs. also, cool to set borderBottomWidth as 1 and borderColor to generate a horizontal rule

const ProfileScreen = (props)=>{
  return (
    <View style={styles.container}>
      <View style={{alignSelf:'center', backgroundColor:'gray', width:120, height:120, borderRadius:90, marginBottom:20}}>
      </View>
      <View style={styles.divider} />
      <Text style={{alignSelf:'center', marginBottom:30, fontSize:26, fontWeight:'100'}}>
        Chuck Norris
      </Text>
      {
        Object.keys(settings).map((key)=>{
          return <View key={key} style={styles.setting}>
            <Text style={styles.settingProp}>
              {key}
            </Text>
            <Text style={styles.settingVal}>
              {settings[key]}
            </Text>
          </View>
        })
      }

    </View>
  )
}

// const ProfileScreen = (props)=>{
//   return (
//     <View style={styles.container}>
//       <View style={{alignItems: 'center'}}>
//         <View style={{backgroundColor:'gray', width:120, height:120, borderRadius: 60, margin: 25}}>
//         </View>
//         <Text style={{fontSize:26,fontWeight:'100',marginBottom:20}}>
//           Chuck Norris
//         </Text>
//       </View>
//       {
//         Object.keys(settings).map((key)=>{
//           return <View key={key} style={styles.setting}>
//             <Text style={styles.settingProp}>
//               {key}
//             </Text>
//             <Text style={styles.settingVal}>
//               {settings[key]}
//             </Text>
//           </View>
//         })
//       }

//     </View>
//   )
// }


const styles = StyleSheet.create({
  setting:{
    padding:20,
    flexDirection:'row',
    borderBottomWidth: 1, // can also use StyleSheet.hairlineWidth
    borderColor:'#d8d8d8',
  },
  settingProp:{
    color:'#888',
    marginRight:10,
    width:70,
  },
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: 'white',
  },
});


// const styles = StyleSheet.create({
//   setting:{
//     flexDirection: 'row',
//     padding: 20,
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgrey',
//   },
//   settingProp:{
//     color:'#888',
//     marginRight:10,
//     width: 70
//   },
//   settingVal:{
//     paddingHorizontal: 10,
//   },
//   container: {
//     flex:1,
//     backgroundColor: 'white',
//   },
// });




ProfileScreen.displayName = 'ProfileScreen'
export default ProfileScreen

