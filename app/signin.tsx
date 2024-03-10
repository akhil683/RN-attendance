import { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'

import { FIREBASE_AUTH } from '@/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn() {

  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  const [ loading, setLoading ] = useState<boolean>(false)
  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
      alert("Successfully Signed In")
      router.replace("/(tabs)/home")
    } catch (error: any) {
     alert("Sign in Failed" + error.message) 
    } finally {
      setLoading(false)
    }
  }

 
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
        <TextInput 
          style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} 
          placeholder='Email' 
          autoCapitalize='none' 
          onChangeText={(text) => setEmail(text)}  
          value={email} 
        />
        </View>
        <View>
          <TextInput 
            placeholder='Password' 
            autoCapitalize='none' 
            onChangeText={(text) => setPassword(text)} 
            secureTextEntry={true} 
            value={password}
            style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} 
          />
        </View>

        { loading ? (
          <ActivityIndicator size="large" color="#fffff" />
        ) : (
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <View style={[styles.button, { width: wp(80)}]}>
            <Text style={{ fontSize: hp(2.5), textAlign: 'center', color: 'white'}}>LOGIN</Text>
          </View>
        </TouchableOpacity> 
        )}

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
