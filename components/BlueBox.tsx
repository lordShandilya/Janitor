import { StyleSheet, View, type ViewProps } from "react-native"
import { ThemedText } from "./ThemedText"

export type BlueBoxProps = ViewProps & {
    amount ?: number,
}

export function BlueBox({ amount, style }: BlueBoxProps) {
    return (
        
        <View style={[styles.box, style]}>
            <ThemedText type="default" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Coupons remaining
            </ThemedText>
            <ThemedText type="title" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Rs. { amount }
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
        height: 180,
        width: 382,
        marginTop: 100,
        borderRadius: 10,
        marginLeft: 25,

    }
})