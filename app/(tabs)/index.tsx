import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import BlueBox from "@/components/BlueBox";

export default function Index() {
  return (
    <>
    <View
      style={styles.titleContainer}
    >
      <ThemedText type="title">Hello Vishal</ThemedText>
      <ThemedText>What yu gonna eat today ;)</ThemedText>
    </View>
    <BlueBox/>
    
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 50,
    marginLeft: 30
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  
});