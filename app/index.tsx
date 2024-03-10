import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function index() {

  return (
   <View style={styles.wrapper}>
      
      <Image
         style={[styles.logoImage, {width: wp(100), height: hp(65)}]}
         source={require("../assets/images/logo.png")} 
      />
      <LinearGradient
         style={[styles.gradient, {width: wp(100), height: hp(90)}]}
         colors={['transparent', '#000']} 
         start={{x: 0.5, y: 0.0}}
         end={{x: 0.5, y: 0.8}}
      > 
      <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.welcomeContainer}>
            <Text style={[styles.welcomeText, {fontSize: hp(4)} ]}>Welcome To</Text>
            <Text style={[styles.welcomeText, {fontSize: hp(5), color: 'orange'}]}>Proxy Attendance</Text>
            <Text style={[styles.welcomePara, { width: wp(80), fontSize: hp(2)}]}>Get started right now to be able to track your attendance record of classes & create your todo-list.</Text>
         </Animated.View>

         <Animated.View style={styles.buttonContainer} entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity 
               onPress={() => router.push("/signin")}>
                  <View style={[styles.button, { width: wp(80), borderColor: 'orange', backgroundColor: 'orange'}]}>
                     <Text style={[styles.buttonText, {fontSize: hp(3), color: 'white'}]}>SIGN IN</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity 
               onPress={() => router.push("/signup")}>
                  <View style={[styles.button, { width: wp(80), borderColor: 'orange'}]}>
                     <Text style={[styles.buttonText, {fontSize: hp(3), color: 'orange'}]}>SIGN UP</Text>
                  </View>
            </TouchableOpacity>
         </Animated.View>
      </LinearGradient>      

   </View>
  )
}
const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'black',
   },
   logoImage: {
      position: 'absolute',
      top: 0,
      transform: [{
         rotate: '-10deg',
      }]
   },
   gradient: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: 40,
      paddingLeft: 20,
   },
welcomeContainer: {
   display: 'flex',
},
welcomeText: {
   color: 'white',
   fontWeight: 'bold',
},
welcomePara: {
   color: '#888',
   marginTop: 12,
},
buttonContainer: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: 24,
   marginTop: 40,
},
button: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 3,
   borderRadius: 60
},
buttonText: {
   color: 'white',
   fontWeight: 'bold',
   textAlign: 'center',
   borderRadius: 12,
   paddingVertical: 12,
},
})
