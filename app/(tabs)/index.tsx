import { Alert, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { RectButton } from "@/components/RectButton"

export default function Index() {
  const router = useRouter();


  return (
    <SafeAreaView>
    <View
      style={styles.titleContainer}
    >
      <ThemedText type="title">Hello Vishal</ThemedText>
      
    </View>

    <View style={styles.buttonContainer}>
      <RectButton tag="GATE ENTRY/EXIT" backgroundColor="#0066F6" onPress={() => Alert.alert('Pressed')}/>
      <RectButton tag="TAKE LEAVE" backgroundColor="#FFF8F8" darkColor="#000000"/>
    </View>
    
    
    </SafeAreaView>
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
  }
  
});