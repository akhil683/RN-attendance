import { StyleSheet, Text, View } from 'react-native'

export default function settings() {

  return (
   <View style={styles.Container}>
      <View style={styles.headerContainer}>
         <Text style={styles.headerText}>
            Hi <Text style={{ color: 'orange'} }>Akhil !</Text>
         </Text>
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
   Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 24,
   },
   headerContainer: {
      marginVertical: 16,
   },
   headerText: {
      color: 'white',
   }
})