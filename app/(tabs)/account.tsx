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
         <Text style={{ fontSize: hp(3), color: 'white'}}>Akhil Palsra</Text>
      </View>
      <View style={{ marginVertical: 20}}>
         <Text style={{ fontSize: hp(2.5), color: 'white'}}>Overall Record</Text>
         <View style={[styles.totalContainer, { width: wp(90)}]}>
            <View style={[styles.totalBox, { width: wp(40), height: hp(15)}]}>
               <Text style={{ textAlign: 'center', fontSize: hp(2), color: 'white'}}>Total Presents</Text>
               <Text style={{ textAlign: 'center', fontSize: hp(2.5), color: 'white', fontWeight: 'bold'}}>324</Text>
            </View>
            <View style={[styles.totalBox, { width: wp(40), height: hp(15)}]}>
               <Text style={{ textAlign: 'center', fontSize: hp(2), color: 'white'}}>Total Presents</Text>
               <Text style={{ textAlign: 'center', fontSize: hp(2.5), color: 'white', fontWeight: 'bold'}}>324</Text>
            </View>
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
      // backgroundColor: '#cc5500',
      paddingTop: 40,
      paddingBottom: 30,
      borderBottomLeftRadius: 70,
      borderBottomRightRadius: 70,
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
      gap: 12,
      borderRadius: 12,
      backgroundColor: 'green',
      padding: 10,
   }
})