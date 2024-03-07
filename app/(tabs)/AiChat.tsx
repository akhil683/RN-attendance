import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen'
import { Feather } from '@expo/vector-icons';

export default function AiChat() {
  return (
    <View  style={styles.Container}>
      {/* <Image 
        style={{ width: wp(100), position: 'absolute', opacity: 0.2, bottom: 0}}
        source={require('../../assets/images/logo.png')} 
      /> */}
        <Text style={[styles.headerText, { fontSize: hp(3)}]}>Ai Chat</Text>
        <ScrollView>
          <View style={styles.questionContainer}>
            <Image 
              style={{ width: wp(10), height: wp(10), borderRadius: 60, borderColor: 'orange', borderWidth: 1}}
              source={require("../../assets/images/logo.png")} 
            />
            <Text style={{ fontSize: hp(2), color: 'white'}}>Who is the CEO of Google?</Text>
          </View>
          <View style={styles.questionContainer}>
            <Image 
              style={{ width: wp(10), height: wp(10), borderRadius: 60, borderColor: 'orange', borderWidth: 1}}
              source={require("../../assets/images/logo.png")} 
            />
            <Text style={{ fontSize: hp(2), padding: 6, borderRadius: 6, backgroundColor: '#222', color: '#999', width: wp(75)}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ratione ab earum tenetur, velit quaerat cupiditate sapiente sit obcaecati, magnam soluta! Illum recusandae quam quaerat explicabo corporis eaque at veritatis laborum. Vero laudantium ratione fugit impedit incidunt, soluta tempora beatae sunt. Maiores, eveniet et quidem consectetur quos dignissimos eos quisquam atque, odio quis aut impedit veniam, laudantium velit doloribus soluta ex reprehenderit? Totam maiores labore ea? Repellendus eveniet at provident, quisquam minus autem impedit nam modi aliquam sint, architecto rerum.</Text>
          </View>
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder='Do you have any question ?'
          />   
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Feather name="send" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 40,
    paddingHorizontal: 16
  },
  headerText: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12,
    gap: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16, 
    gap: 8,
    paddingHorizontal: 12,
  },
  textInput: {
    width: wp(80), 
    borderRadius: 40, 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    backgroundColor: '#222', 
    borderColor: '#999', 
    borderWidth: 1
  },
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 100,
    backgroundColor: 'orange',
  }
})