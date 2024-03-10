import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { FullWindowOverlay } from 'react-native-screens';

export default function Chart() {
   const data = {
      labels: ["Jan", "Feb", 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [{
            data: [20, 40, 60, 80, 75, 20]
         }]
   }

   const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
};

  return (
   <ScrollView>
      <BarChart 
         data={data}
         height={hp(40)}
         width={wp(100)}
         yAxisLabel=''
         yAxisSuffix=''
         chartConfig={chartConfig}
      />
   </ScrollView>
  )
}
const styles = StyleSheet.create({})