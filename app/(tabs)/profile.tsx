import { ProfilePicField } from "@/components/ProfilePicField";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Image } from "react-native";

export default function Profile() {
    return (
        <ThemedView style = {styles.container}>
            <Image
                source={require('@/assets/images/Rectangle.png')}
                style={styles.header}
            />
            <ProfilePicField style = {styles.profilepic}/>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        width: 418,
        zIndex: 1
    },
    profilepic: {
        position: 'absolute',
        zIndex: 2,
    
    }

})