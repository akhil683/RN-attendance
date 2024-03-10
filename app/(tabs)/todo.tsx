import { Ionicons } from '@expo/vector-icons'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function todo() {
   const [ done, setDone ] = useState<boolean>(false)
   const [ todo, setTodo ] = useState<string>("")

  return (
   <View style={styles.container}>
      <Text style={[styles.headerText, { fontSize: hp(3)}]}> My <Text style={{ color: 'orange'}}>tasks</Text></Text>

      <View style={styles.searchContainer}>
         <TextInput 
            onChangeText={(text) => setTodo(text)}
            style={[styles.textInput, { width: wp(77)}]}
            placeholder='Set your task...'
         />
         <TouchableOpacity>
            <View style={{width: wp(15), height: 'auto', paddingVertical: 16, backgroundColor: 'orange', borderRadius: 40}}>
               <FontAwesome name="send" size={24} color="white" style={{textAlign: 'center'}}/>
            </View>
         </TouchableOpacity>
      </View>

      <View style={styles.todoWrapper}>
         <View style={styles.todoContainer}>
            <TouchableOpacity onPress={() => setDone(!done)} style={styles.todoTextContainer}>
               { !done 
                  ? <Ionicons name="checkmark-circle-outline" size={24} color="orange" />
                  : <Ionicons name="checkmark-circle" size={24} color="green" />
               }
               <Text style={{ color: 'white', fontSize: hp(2)}}>Complete Hermetica Website</Text>
            </TouchableOpacity>
            <AntDesign name="delete" size={24} color="red" />
         </View>
      <Text style={{ width: wp(25), marginLeft: 24, textAlign: 'center', backgroundColor: 'orange', borderRadius: 40}}>Incomplete</Text>
      </View>

   </View>
  )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#111',
      paddingHorizontal: 12,
   },
   headerText: {
      textAlign: 'center', 
      color: 'white',
      marginBottom: 24,
   },
   searchContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
   },
   textInput: {
      backgroundColor: '#999',
      borderRadius: 60,
      paddingHorizontal: 16,
      paddingVertical: 8,
      color: 'black',
   },
   todoWrapper: {
      backgroundColor: '#222',
      marginBottom: 16,
      borderRadius: 6,
      paddingHorizontal: 16,
      paddingVertical: 12,
   },
   todoContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: 6,
   },
   todoTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
   }
})