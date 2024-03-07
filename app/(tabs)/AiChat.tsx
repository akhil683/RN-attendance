import { StyleSheet, Text, View } from 'react-native'

export default function AiChat() {

  return (
    <View  style={styles.Container}>
        <Text style={styles.headerText}>Hello World</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#111',
  },
  headerText: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})