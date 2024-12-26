import { StyleSheet, View } from "react-native"
import { ThemedText } from "./ThemedText"

export default function BlueBox() {
    return (
        
        <View style={styles.box}>
            <ThemedText type="default" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Coupons remaining
            </ThemedText>
            <ThemedText type="title" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Rs. 500
            </ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0066F6',
        height: 225,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 50,
        borderRadius: 10

    }
})