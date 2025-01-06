import { Alert, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { RectButton } from "@/components/RectButton";
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
  const router = useRouter();


  return (
    <ThemedView style = {{flex: 1}}>
    <ThemedView
      style={styles.titleContainer}
    >
      <ThemedText type="title">Hello Vishal</ThemedText>
      
    </ThemedView>

    <ThemedView style={styles.buttonContainer}>
      <RectButton tag="GATE ENTRY/EXIT" backgroundColor="#0066F6" style = {styles.button} onPress={() => Alert.alert('Pressed')}/>
      <RectButton tag="TAKE LEAVE" backgroundColor="#FFF8F8" darkColor="#000000" style = {styles.button}/>
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