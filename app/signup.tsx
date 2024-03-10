import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '@/FirebaseConfig'

export default function signup() {
  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  const [ loading, setLoading ] =  useState<boolean>(false)

  const auth = FIREBASE_AUTH

  const signUp= async () => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("check your email")
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
         style={[styles.gradient, {width: wp(100), height: hp(90)}]}
         colors={['transparent', '#000']} 
         start={{x: 0.5, y: 0.0}}
         end={{x: 0.5, y: 0.8}} 
        >
      <Animated.Text entering={FadeInDown.delay(100)} style={[styles.headerText, { fontSize: hp(4.5), }]}>Create Account</Animated.Text>

      <KeyboardAvoidingView behavior='padding'>
      <Animated.View entering={FadeInDown.delay(100)} style={[styles.formContainer, { width: wp(100), height: hp(55)}]}>
        <View>
        <TextInput 
          style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} 
          placeholder='Name'  
        />
        </View>
        <View>
          <TextInput 
            style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} 
            placeholder='Email' 
            autoCapitalize='none' 
            value={email} 
            onChangeText={(text) => setEmail(text)} 
          />
        </View>
        <View>
          <TextInput 
            style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} 
            placeholder='Password' 
            autoCapitalize='none' 
            value={password} 
            onChangeText={(text) => setPassword(text)} 
          />
        </View>
        <View>
          <TextInput 
            style={[styles.textInput, { width: wp(80), fontSize: hp(2.5)}]} 
            placeholder='Confirm Passowrd'
          />
        </View>
        <TouchableOpacity onPress={signUp}>
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
      </KeyboardAvoidingView>
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
