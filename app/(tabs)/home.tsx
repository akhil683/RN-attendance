import { Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import { router } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function index() {

  return (
   <View style={styles.Container}>
      <Animated.View entering={FadeInDown.delay(100)} style={styles.headerContainer}>
         <Text style={[styles.headerText, { fontSize: hp(5)}]}>
            Hi <Text style={{ color: 'orange'} }>Akhil !</Text>
         </Text>
         <TouchableOpacity onPress={() => router.push("/(tabs)/settings")}>
          <Image 
            style={{ width: hp(8), height: hp(8)}}
            source={require("../../assets/images/logo.png")} 
          />
         </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200)} style={styles.recordContainer}>
        <Text style={[styles.recordHeaderText, { fontSize: hp(3)}]}>Attendance Record</Text>

        <View style={styles.recordBlockContainer}>

          <View style={[styles.recordBlock, {width: wp(30), height: hp(15), backgroundColor: 'green'}]}>
               <Text style={[styles.attendHeaderText, { fontSize: hp(2)}]}>Present</Text>
               <View style={styles.attendTextContainer}>
                  <Text style={[styles.attendText, { fontSize: hp(5)}]}>69</Text>
               </View>
          </View>

          <View style={[styles.recordBlock, {width: wp(30), height: hp(15), backgroundColor: 'orange'}]}>
            <Text style={[styles.attendHeaderText, { fontSize: hp(2)}]}>Proxy</Text>
            <View style={styles.attendTextContainer}>
               <Text style={[styles.attendText, { fontSize: hp(5)}]}>69</Text>
            </View>
          </View>

          <View style={[styles.recordBlock, { width: wp(30), height: hp(15), backgroundColor: 'red'}]}>
            <Text style={[styles.attendHeaderText, { fontSize: hp(2)}]}>Absent</Text>
            <View style={styles.attendTextContainer}>
               <Text style={[styles.attendText, { fontSize: hp(5)}]}>69</Text>
            </View>
          </View>

        </View>
      </Animated.View>
   </View>
  )
}

const styles = StyleSheet.create({
   Container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#111',
   },
   headerContainer: {
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginVertical: 16,
      paddingHorizontal: 24,
   },
   headerText: {
      color: 'white',
   },
   recordContainer: {

   },
   recordHeaderText: {
      color: '#fffaf0',
      marginLeft: 16,

   },
   recordBlockContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 16,
   },
   recordBlock: {
    borderRadius: 12,
   },
   attendHeaderText: {
      color: 'white',
      fontWeight: '700',
      paddingLeft: 10,
      paddingTop: 8,
   },
   attendTextContainer: {
      position: 'absolute',
      bottom: 10,
      right: 12,
   },
   attendText: {
      fontWeight: 'bold',
      color: 'white',
   }

})