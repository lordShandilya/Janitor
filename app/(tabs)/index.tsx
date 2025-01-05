import { SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { LeaveButton, EntryButton } from "@/components/HomeScreenButtons"

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
      <LeaveButton/>
      <EntryButton/>
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
    gap: 10
  }
  
});