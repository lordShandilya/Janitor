import { Alert, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter,Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { RectButton } from "@/components/RectButton";
import { ThemedView } from "@/components/ThemedView";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useJanitorStore } from "@/utils/Store";

export default function Index() {
  const router = useRouter();
  const username = useJanitorStore(state => state.user.info.name)

  return (
    <ThemedView style = {{flex: 1}}>
    <ThemedView
      style={styles.titleContainer}
    >
      <ThemedText type="title">Hello {username}</ThemedText>
      
    </ThemedView>

    <ThemedView style={styles.buttonContainer}>
      <RectButton tag="GATE ENTRY/EXIT" backgroundColor="#0066F6" style = {styles.button} route={() => router.push('/(tabs)/scan')}/>
      <RectButton tag="TAKE LEAVE" backgroundColor="#FFF8F8" darkColor="#000000" style = {styles.button} route={()=> Alert.alert('Under Development')}/>
      <Link href="/(auth)/onboarding" className="text-primary">On Boarding Page</Link>
    </ThemedView>
    </ThemedView>
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 70,
    marginLeft: 30
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
    width: 250,
    height: 40,
    borderRadius: 10,
  }
  
});