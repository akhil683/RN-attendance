import { Image, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function account() {

  return (
   <View style={styles.Container}>
      <View style={[styles.accountContainer, { width: wp(100)}]}>
         <Image 
            source={require("../../assets/images/logo.png")} 
            style={{ width: wp(40), height: wp(40)}}
         />
         <Text style={{ fontSize: hp(3.5), color: 'white', fontWeight: 'bold'}}>Akhil Palsra</Text>
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
      backgroundColor: 'black',
      alignItems: 'center',
   },
   accountContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#222',
      paddingTop: 40,
      paddingBottom: 30,
      // borderBottomLeftRadius: 70,
      // borderBottomRightRadius: 70,
   },
   totalContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 12,
      marginTop: 20,
      backgroundColor: '#222',
      borderRadius: 15,
      padding: 16,
   },
   totalBox: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      borderRadius: 12,
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