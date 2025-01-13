import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { StyleSheet, View } from "react-native"

export default function Menu() {
    return ( 
        <ThemedView style={styles.Container}>
            <ThemedText type="default">Under development...</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
})