import { ProfilePicField } from "@/components/ProfilePicField";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, View } from "react-native";

export default function Profile() {
    return (
        <ThemedView style = {styles.container}>
            <View style = {styles.header}>
            </View>
            <ProfilePicField style = {styles.profilepic}/>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 274,
        width: 414,
        borderBottomStartRadius: 150,
        borderBottomEndRadius: 150,
        backgroundColor: '#0066F6',
        position: 'relative',
        zIndex: 2,
        top: 0
        
    },
    profilepic: {
        top: 0,
        position: 'absolute',
        zIndex: 10,
        
    }

})