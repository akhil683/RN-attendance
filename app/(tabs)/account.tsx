import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { router } from 'expo-router'

import { FIREBASE_AUTH } from '@/FirebaseConfig'
import { useState } from 'react'

export default function account() {
   const [ showLogOut, setShowLogOut ] = useState<boolean>(false)

  const signOut = () => {
    FIREBASE_AUTH.signOut() 
    router.replace("/signin")
  }

  return (
   <View style={styles.Container}>

      { showLogOut &&
      <View style={[styles.confirmLogOutContainer, { width: wp(100), height: hp(100)}]}>
         <View style={{ padding: 20, backgroundColor: "#333", width: wp(80), borderRadius: 8}}>
            <Text style={{fontSize: hp(2.5), color: 'white', textAlign: 'center'}}>Are you sure, you want to Log out?</Text>    
            <View style={styles.confirmLogOutWrapper}>
               <TouchableOpacity onPress={signOut} style={[styles.confirmLogOutButton, { backgroundColor: 'orange'}]}>
                  <Text style={{ fontSize: hp(3)}}>Log out</Text>    
               </TouchableOpacity>    
               <TouchableOpacity onPress={() => setShowLogOut(false)} style={styles.confirmLogOutButton}>
                  <Text style={{fontSize: hp(3), color: 'orange'}}>Cancel</Text>    
               </TouchableOpacity>    
            </View> 
         </View>
      </View>
      }

      <View style={[styles.accountContainer, { width: wp(100)}]} >
         <TouchableOpacity onPress={() => setShowLogOut(true)} style={{ position: 'absolute', right: 12, top: 50}}>
            <View style={styles.logOutContainer}>
               <Text style={{ fontSize: hp(1.5), color: 'orange'}}>Log Out</Text>
            </View>
         </TouchableOpacity>

         <Image 
            source={require("../../assets/images/logo.png")} 
            style={{ width: wp(35), height: wp(35)}}
         />
         <Text style={{ fontSize: hp(3), color: 'white', fontWeight: 'bold'}}>Akhil Palsra</Text>
      </View>

      <View style={{ marginVertical: 20}}>
         <Text style={{ fontSize: hp(2.5), color: 'white'}}>Overall Record</Text>
         <View style={[styles.totalContainer, { width: wp(90)}]}>
            <View style={[styles.totalBox, { width: wp(40), height: hp(10), backgroundColor: 'green'}]}>
               <Text style={[styles.totalText, { fontSize: hp(2)}]}>Total Presents</Text>
               <Text style={[styles.totalText, { fontSize: hp(3), fontWeight: 'bold'}]}>324</Text>
            </View>
            <View style={[styles.totalBox, { width: wp(40), height: hp(10), backgroundColor: 'red'}]}>
               <Text style={[styles.totalText, { fontSize: hp(2)}]}>Total Presents</Text>
               <Text style={[styles.totalText, { fontSize: hp(3), fontWeight: 'bold'}]}>324</Text>
            </View>
         </View>
      </View>

      <View style={styles.chartContainer}>
         <Text style={{ fontSize: hp(2.5), color: 'white'}}>Attendance Overview</Text>
         <View style={styles.chartBox}>
         </View>
      </View>
   </View>
  ) }

const styles = StyleSheet.create({
   Container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
   },
   confirmLogOutContainer: {
      zIndex: 10, 
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111'
   },
   confirmLogOutWrapper: {
      display: 'flex',
      flexDirection: 'row',  
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      marginTop: 24, 
   }, 
   confirmLogOutButton: {
      paddingHorizontal: 12, 
      paddingVertical: 6, 
      borderRadius: 6
   },  
   accountContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#222',
      paddingTop: 40,
      paddingBottom: 15,
   },
  logOutContainer: {
   borderRadius: 8,
   paddingHorizontal: 8,
   paddingVertical: 6,
   borderWidth: 1,
   borderColor: 'orange', 
  },
   totalContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 12,
      marginTop: 15,
      backgroundColor: '#222',
      borderRadius: 12,
      padding: 16,
   },
   totalBox: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      borderRadius: 8,
      padding: 10,
   },
   totalText: {
      textAlign: 'center',
      color: 'white',
   },
   chartContainer: {

   },
   chartBox: {

   }
})