import { ThemedText } from "@/components/ThemedText"
import { StyleSheet, View } from "react-native"

export default function Menu() {
    return ( 
        <View style={styles.titleContainer}>
            <ThemedText type="default">Under development...</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 50
      },
      stepContainer: {
        gap: 8,
        marginBottom: 8,
      },
      reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
})