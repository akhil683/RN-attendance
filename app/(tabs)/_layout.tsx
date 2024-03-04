import { Tabs } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function _layout() {

  return (
   <Tabs screenOptions={{
      headerShown: false,
   }}>
      <Tabs.Screen
         name='home'
         options={{
         }}
      >

      </Tabs.Screen>
   </Tabs>
  )
}
const styles = StyleSheet.create({})