import { ProfilePicField } from "@/components/ProfilePicField";
import { ThemedView} from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText"
import { StyleSheet, ImageBackground, StatusBar } from "react-native";

export default function Profile() {
    return (
        <>
        <ThemedView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require('@/assets/images/Rectangle.png')}
                style={styles.header}
            >
                {/* Floating ProfilePicField */}
                <ProfilePicField style={styles.profilePic} />
            </ImageBackground>
            <ThemedText type="title" style={styles.profileName}>Abid</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.profileName}>youremail@domain.com | +01 234 567 789</ThemedText>
            
        </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },
    header: {
        width: '100%',
        height: 250, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        height: 150,
        width: 150,
        position: 'absolute', 
        bottom: -90, 
    },
    profileName:{
        top:110,
    }
});
