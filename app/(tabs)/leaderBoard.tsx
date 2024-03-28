import { FlatList, Image, StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'

  interface UserProps {
    id: string,
    name: string,
    present: number,
  }

export default function leaderBoard() {
  const TopUsers = [
    {
      id: '1',
      name: 'Akhil',
      present: 49,
    },
    {
      id: '2',
      name: 'Shivansh',
      present: 46,
    },
    {
      id: '3',
      name: 'Rishu',
      present: 41,
    },
    {
      id: '4',
      name: 'vishal',
      present: 37,
    },
    {
      id: '5',
      name: 'Navneet',
      present: 34,
    },
    {
      id: '6',
      name: 'Manasvin',
      present: 33,
    },
    {
      id: '7',
      name: 'Aditya',
      present: 33,
    },
    {
      id: '8',
      name: 'Gaurav',
      present: 30,
    },
    {
      id: '9',
      name: 'Priyanshu',
      present: 29,
    },
    {
      id: '10',
      name: 'dushyant',
      present: 26,
    },
    {
      id: '11',
      name: 'Yadav',
      present: 22,
    },
    {
      id: '12',
      name: 'Osho',
      present: 21,
    },
  ]

  return (
    <View style={styles.Container}>

      <View style={styles.headerTextContainer}>
        <Text style={[styles.headerText, { fontSize: hp(3), color: 'orange' } ]}>Attendance</Text>
        <Text style={[styles.headerText, { fontSize: hp(4), color: 'white' }]}>Leaderboard</Text>
      </View>
        <FlatList 
          data={TopUsers}
          keyExtractor={User => User.id}
          renderItem={UserCard}
        />
    </View>
  )
}

const UserCard = ({ item}: {item: UserProps}) => {
  const bgcolor = item?.id == "1" ? "#444" : "#333" 
  const fontsize = item?.id == "1" ? 3 : 2.5

  return (
    <View style={[styles.userCardContainer, { width: wp(90), marginHorizontal: wp(5), backgroundColor: bgcolor}]}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
      <Text style={{ fontSize: hp(fontsize), color: 'white', width: wp(6)}}>{item?.id}</Text>
      <Image 
        source={require('../../assets/images/logo.png')} 
        style={{ width: hp(5), height: hp(5)}}
      />
      <Text style={{fontSize: hp(fontsize), color: 'white', marginLeft: 12}}>{item?.name}</Text>
      </View>
      <Text style={{fontSize: hp(fontsize), color: 'orange', fontWeight: 'bold'}}>{item?.present}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
   Container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 50,
      backgroundColor: '#111',
   },
   headerTextContainer: {
    textAlign: 'center',
    marginBottom: 20,
   },
   headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
   },
   userCardContainer: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
   }
})