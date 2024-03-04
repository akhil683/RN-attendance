import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function signup() {
  return (
    <View style={styles.container}>

      <Animated.Image 
        style={[styles.imageContainer, { width: wp(90), height: wp(90)} ]}
        source={require("../assets/images/logo.png")} 
        entering={FadeInDown.delay(200)}
      />

      <LinearGradient 
         style={[styles.gradient, {width: wp(100), height: hp(90)}]}
         colors={['transparent', '#000']} 
         start={{x: 0.5, y: 0.0}}
         end={{x: 0.5, y: 0.8}} 
        >
      <Animated.Text entering={FadeInDown.delay(100)} style={[styles.headerText, { fontSize: hp(4.5), }]}>Create Account</Animated.Text>
      <Animated.View entering={FadeInDown.delay(100)} style={[styles.formContainer, { width: wp(100), height: hp(55)}]}>
        <View>
        <TextInput style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} placeholder='Name'  />
        </View>
        <View>
          <TextInput style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} placeholder='Email'/>
        </View>
        <View>
          <TextInput style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} placeholder='Password'/>
        </View>
        <View>
          <TextInput style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} placeholder='Confirm Passowrd'/>
        </View>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <View style={[styles.button, { width: wp(80)}]}>
            <Text style={{ fontSize: hp(2.5), textAlign: 'center', color: 'white'}}>CREATE ACCOUNT</Text>
          </View>
        </TouchableOpacity> 

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
              Already have an account?
          </Text>
          <TouchableOpacity style={{}} onPress={() => router.push("/signin")} >
            <Text style={[ styles.footerText, { marginLeft: 6, color: 'orange' }]}>Sign In </Text>
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
    paddingVertical: 8,
    borderRadius: 40,
    paddingLeft: 20,
  },
button: {
  backgroundColor: 'orange',
  paddingVertical: 10,
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
