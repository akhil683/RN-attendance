import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function SignIn() {

  return (
    <View style={styles.container}>

      <Animated.Image 
        style={[styles.imageContainer, { width: wp(90), height: wp(90)} ]}
        source={require("../assets/images/logo.png")} 
        entering={FadeInDown.delay(200)}
      />

      <LinearGradient 
         style={[styles.gradient, {width: wp(100), height: hp(100)}]}
         colors={['transparent', '#000']} 
         start={{x: 0.5, y: 0.0}}
         end={{x: 0.5, y: 0.8}} 
        >
      <Animated.Text entering={FadeInDown.delay(100)} style={[styles.headerText, { fontSize: hp(4.5), }]}>SIGN IN</Animated.Text>
      <Animated.View entering={FadeInDown.delay(100)} style={[styles.formContainer, { width: wp(100), height: hp(50)}]}>
        <View>
        <TextInput style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} placeholder='Email'  />
        </View>
        <View>
          <TextInput style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} placeholder='Password'/>
        </View>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <View style={[styles.button, { width: wp(80)}]}>
            <Text style={{ fontSize: hp(2.5), textAlign: 'center', color: 'white'}}>LOGIN</Text>
          </View>
        </TouchableOpacity> 

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
              Don't have any account?
          </Text>
          <TouchableOpacity style={{}} onPress={() => router.push("/signup")} >
            <Text style={[ styles.footerText, { marginLeft: 6, color: 'orange' }]}>Create Account</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
      </LinearGradient>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  gradient: {
    display: 'flex',
    justifyContent: 'flex-end',
   },
  imageContainer: {
    position: 'absolute',
    top: 20,
    transform: [{
      rotate: '-15deg',
    }]
  },
  headerText: {
    color: 'orange',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600'
  },
  formContainer: {
    zIndex: 2,
    backgroundColor: '#111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    gap: 24,
  },
  textInput: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 40,
    paddingLeft: 20,
  },
button: {
  backgroundColor: 'orange',
  paddingVertical: 12,
  borderRadius: 40,
},
footerContainer: {
display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
},
footerText: {
  color: 'white',
}
})
