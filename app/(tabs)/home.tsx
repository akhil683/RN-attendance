import { Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import { router } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export default function index() {

  return (
   <View style={styles.Container}>
      <View style={styles.headerContainer}>
         <Text style={[styles.headerText, { fontSize: hp(5)}]}>
            Hi <Text style={{ color: 'orange'} }>Akhil !</Text>
         </Text>
         <TouchableOpacity onPress={() => router.push("/(tabs)/settings")}>
          <Image 
            style={{ width: hp(8), height: hp(8)}}
            source={require("../../assets/images/logo.png")} 
          />
         </TouchableOpacity>
      </View>

      <View style={styles.recordContainer}>
        <Text style={[styles.recordHeaderText, { fontSize: hp(3)}]}>Your Record</Text>
        <View style={styles.recordBlockContainer}>
          <View style={[styles.recordBlock, {width: wp(40), height: hp(10)}]}></View>
          <View style={[styles.recordBlock, { width: wp(40), height: hp(10)}]}></View>
        </View>
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
   Container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#111',
      paddingHorizontal: 24,
   },
   headerContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginVertical: 16,

   },
   headerText: {
      color: 'white',
   },
   recordContainer: {

   },
   recordHeaderText: {
    color: '#fffaf0',
   },
   recordBlockContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 16,
   },
   recordBlock: {
    backgroundColor: 'orange', 
    borderRadius: 12,
   }

})