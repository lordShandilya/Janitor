import { Alert, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter,Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { RectButton } from "@/components/RectButton";
import { ThemedView } from "@/components/ThemedView";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useJanitorStore } from "@/utils/Store";
import { horizontalScale, verticalScale } from "@/utils/Scale";

export default function Index() {
  const router = useRouter();
  const username = useJanitorStore(state => state.user.info.name)

  return (
    <View style = {styles.container}>
    <View
      style={styles.titleContainer}
    >
      <Text className="font-kextrabold text-3xl">Hello {username}</Text>
      
    </View>

    <View style={styles.buttonContainer}>
      <RectButton tag="GATE ENTRY/EXIT" backgroundColor="#0066F6" style = {styles.button} route={() => router.push('/(tabs)/scan')}/>
      <RectButton tag="TAKE LEAVE" backgroundColor="#00cccc" style = {styles.button} route={()=> Alert.alert('Under Development')}/>
      
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 70,
    transform: [{translateX: -80}],
    width: horizontalScale(160),
    padding: 10
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    gap: 40
  },
  button: {
    width: horizontalScale(250),
    height: verticalScale(40),
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  }
  
});