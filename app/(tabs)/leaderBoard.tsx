import { FlatList,SafeAreaView, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'

  interface UserProps {
    id: string,
    name: string,
    present: number,
  }

export default function leaderBoard() {
  const TopUsers = [
    {
      id: '2',
      name: 'Akhil',
      present: 46,
    },
    {
      id: '1',
      name: 'Shivansh',
      present: 44,
    },
    {
      id: '3',
      name: 'Rishu',
      present: 37,
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
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-evenly'}}
          keyExtractor={topUser => topUser.id}
          renderItem={TopUser}
        />
        <FlatList 
          data={TopUsers}
          keyExtractor={User => User.id}
          renderItem={UserCard}
        />
    </View>
  )
}

const TopUser = ({ item }: {item: UserProps}) => {

  const imageSize: number = item?.id == "1" ? 25: 20
  return (
    <View style={{ backgroundColor: 'green', borderRadius: 8, padding: 6, marginTop: 12, transform: [{ translateY: item?.id == "1" ? -12 : 0}] }}>
      <Image 
        style={{ width: wp(imageSize), height: wp(imageSize), borderRadius: 60, borderWidth: 2, borderColor: item?.id == "1" ? "orange" : "white"}}
        source={require('../../assets/images/logo.png')} 
      />
      <Text style={{ fontSize: hp(2), color: "white", textAlign: 'center'}}>{item?.name}</Text>
      <Text style={{ fontSize: hp(4), color: 'white', fontWeight: 'bold', textAlign: 'center'}}>{item?.present}</Text>
      <Text style={{ fontSize: hp(1.5), color: 'white', textAlign: 'center'}}>Presents</Text>
    </View>
  )
}
const UserCard = ({item }: {item: UserProps}) => {
  return (
    <View style={[styles.userCardContainer, { width: wp(90), marginHorizontal: wp(5)}]}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
      <Text style={{ fontSize: hp(2), color: 'white'}}>4</Text>
      <Image 
        source={require('../../assets/images/logo.png')} 
        style={{ width: hp(5), height: hp(5)}}
      />
      </View>
      <Text style={{fontSize: hp(2), color: 'white'}}>{item?.name}</Text>
      <Text style={{fontSize: hp(2.5), color: 'orange', fontWeight: 'bold'}}>{item?.present}</Text>
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
    marginBottom: 60,
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
    backgroundColor: '#444',
    marginBottom: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
   }
})