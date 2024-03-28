import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { router, useNavigation } from 'expo-router'
import { Calendar } from 'react-native-calendars'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function index() {
   const navigation = useNavigation()

   const onToggle = () => {
      navigation.dispatch(DrawerActions.openDrawer())
   }

   return (
   <View style={styles.Container}>
      <Animated.View entering={FadeInDown.delay(100)} style={styles.headerContainer}>
         <TouchableOpacity onPress={onToggle}>
            <Ionicons name="menu" size={30} color="white" />
         </TouchableOpacity>
         <Text style={[styles.headerText, { fontSize: hp(5)}]}>
            Hi <Text style={{ color: 'orange'} }>Akhil !</Text>
         </Text>
         <TouchableOpacity onPress={() => router.push("/(tabs)/account")}>
          <Image 
            style={{ width: hp(8), height: hp(8)}}
            source={require("../../../assets/images/logo.png")} 
          />
         </TouchableOpacity>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(200)} style={styles.recordContainer}>
        <Text style={[styles.recordHeaderText, { fontSize: hp(3.5)}]}>Attendance Record</Text>

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

      <View style={{ marginTop: 30}}>
         <Calendar 
            style={{
               height: hp(60),
               borderWidth: 1,
               borderColor: '#444',
            }}
            theme={{
               calendarBackground: '#111',
               todayTextColor: 'orange',
               dayTextColor: 'white',
               textSectionTitleColor: 'orange',
               textDisabledColor: '#999',
               indicatorColor: 'green',
               monthTextColor: 'white',
               arrowColor: 'orange'
            }} 
            // enableSwipeMonths={true}
            // hideArrows={true}
         />
      </View>
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
      alignItems: 'center',
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