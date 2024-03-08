import { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from '@/FirebaseConfig'

export default function _layout() {

   const [ user, setUser ] = useState<User | null >(null)

   useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
         console.log('user', user)
         setUser(user);
      })
   }, [])

  return (
   <Stack 
      screenOptions={{
         headerShown: false,
      }} 
   >
   <Stack.Screen 
      name='signin'
      options={{
         presentation:'fullScreenModal'
      }}
   />
   <Stack.Screen 
      name='signup'
      options={{
         presentation:'fullScreenModal'
      }}
   />
   </Stack>
  )
}