import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function _layout() {

  return (
   <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'orange',
      tabBarInactiveBackgroundColor: "#111",
      tabBarActiveBackgroundColor: '#111',
   }}> 
      <Tabs.Screen
         name='home'
         options={{
            tabBarIcon: ({ color }) => <Entypo name="home" size={28} color={color} />
         }}
      />
      <Tabs.Screen
         name='leaderBoard'
         options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={28} color={color} />
         }}
      />
      <Tabs.Screen
         name='todo'
         options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="tasks" size={24} color={color} />
         }}
      />
      <Tabs.Screen
         name='AiChat'
         options={{
            tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={28} color={color} />
         }}
      />
      <Tabs.Screen
         name='account'
         options={{
            tabBarIcon: ({ color }) => <MaterialIcons name='account-circle' size={28} color={color} />
         }}
      />
   </Tabs>
  )
}