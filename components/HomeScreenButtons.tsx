import { Alert, Pressable, View, Text, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

function LeaveButton() {
    return (
        <View>
            <Pressable
                onPress={() => Alert.alert('Leave requested')}
                style={styles.lbutton}
            >
               <ThemedText type="defaultSemiBold">Leave</ThemedText>
            </Pressable>
        </View>
    )
}

function EntryButton() {
    return (
        <View>
            <Pressable
                onPress={() => Alert.alert('Scan QR code.')}
                style= {styles.ebutton}
            >
                <ThemedText type="defaultSemiBold" darkColor="#000000">Gate Entry/Exit</ThemedText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    lbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0066F6',
        width: 250,
        height: 40,
        borderRadius: 10,
    },
    ebutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8F8',
        width: 250,
        height: 40,
        borderRadius: 10,
    }
})

export {
    LeaveButton,
    EntryButton
}