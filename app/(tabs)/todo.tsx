import { Ionicons } from '@expo/vector-icons'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DP } from '@/FirebaseConfig';

interface Todo {
   title: string
   done: boolean
   id: string
}

export default function todo() {

   const [ todos, setTodos ] = useState<Todo[]>([])
   const [ todo, setTodo ] = useState<string>("")

   useEffect(() => {
      const todoRef = collection(FIRESTORE_DP, 'todo')
      const subscriber = onSnapshot(todoRef, {
         next: (snapshot): any => {
            const todos: Todo[] = []
            snapshot.docs.forEach(doc => {
               todos.push({
                  id: doc?.id,
                  ...doc?.data()
               } as Todo)
            })
            setTodos(todos)
         } 
      })
      return () => subscriber()
   }, [])

   console.log(todos)

   const addTodo = async () => {
      await addDoc(collection(FIRESTORE_DP, 'todo'), {title: todo, done: false}) 
      setTodo("")
   }

const TodoCard = ({ item } : { item: Todo}) => {

   const ref = doc(FIRESTORE_DP, `todo/${item?.id}`)
   const doneTodo = async () => {
      updateDoc(ref, { done: !item.done})
   }
   const deleteTodo = async () => {
      deleteDoc(ref)
   }

   return (
      <View style={styles.todoWrapper}>
         <View style={styles.todoContainer}>
            <TouchableOpacity style={styles.todoTextContainer} onPress={doneTodo}>
               {!item?.done 
                  ? <Ionicons name="checkmark-circle-outline" size={24} color="orange" />
                  : <Ionicons name="checkmark-circle" size={24} color="green" />
               }
               <Text style={{ color: 'white', fontSize: hp(2), width: wp(60)}}>{item?.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteTodo}>
               <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
         </View>
         <Text style={{ width: wp(25), marginLeft: 24, textAlign: 'center', backgroundColor: item?.done ? "green" : "orange", borderRadius: 40}}>    
            {item?.done ? 'completed' : "Incomplete"}
         </Text>
      </View>
   )
}


  return (
   <View style={styles.container}>
      <Text style={[styles.headerText, { fontSize: hp(3)}]}> My <Text style={{ color: 'orange'}}>Tasks</Text></Text>

      <View style={styles.searchContainer}>
         <TextInput 
            value={todo}
            onChangeText={(text: string) => setTodo(text)}
            style={[styles.textInput, { width: wp(77)}]}
            placeholder='Add your task...'
         />
         <TouchableOpacity onPress={addTodo} disabled={todo === ""}>
            <View style={{width: wp(15), height: 'auto', paddingVertical: 16, backgroundColor: 'orange', borderRadius: 40}}>
               <FontAwesome name="send" size={24} color="white" style={{textAlign: 'center'}}/>
            </View>
         </TouchableOpacity>
      </View>

      { todos.length > 0 
         ? <FlatList 
               data={todos} 
               keyExtractor={(todo: Todo) => todo?.id}
               renderItem={TodoCard}
            />
         : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: hp(2.5), color: '#999'}}>No task is Added...</Text></View>
      }

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
      backgroundColor: '#777',
      borderRadius: 60,
      paddingHorizontal: 16,
      paddingVertical: 6,
      color: 'white',
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