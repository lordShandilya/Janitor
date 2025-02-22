import { ProfilePicField } from "@/components/ProfilePicField";
import { ThemedView} from "@/components/ThemedView";
import { Pressable,Text } from "react-native";
import { ThemedText } from "@/components/ThemedText"
import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Profile() {
    return (
        <ThemedView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require('@/assets/images/Rectangle.png')}
                style={styles.header}
            >
                {/* Floating ProfilePicField */}
                <ProfilePicField style={styles.profilePic} />
            </ImageBackground>
            <ThemedText type="title" style={styles.profileName} >Abid</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.profileName}>youremail@domain.com | +01 234 567 789</ThemedText>
            <ThemedView>
                <ThemedView>
                    <ThemedView style={styles.list}>
                        <Octicons name="number" size={24} color="black" />
                        <ThemedText className="text-primary">Roll Number</ThemedText>
                        <ThemedText>22042XX</ThemedText>
                    </ThemedView>
                    <ThemedView>
                        <FontAwesome5 name="building" size={24} color="black" />
                        <ThemedText>Hostel</ThemedText>
                        <ThemedText>Aryabhatta</ThemedText>
                    </ThemedView>
                    <ThemedView>
                        <FontAwesome6 name="bed" size={24} color="black" />
                        <ThemedText>Room Number</ThemedText>
                        <ThemedText>402</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView>
                    <Pressable>
                        <MaterialIcons name="support-agent" size={24} color="black" />
                        <ThemedText>Help and Support</ThemedText>
                    </Pressable>
                    <Pressable>
                        <FontAwesome6 name="contact-card" size={24} color="black" />
                        <ThemedText>Conatact Us</ThemedText>
                    </Pressable>
                    <Pressable>
                    <MaterialIcons name="privacy-tip" size={24} color="black" />
                        <ThemedText>Privacy Policy</ThemedText>
                    </Pressable>
                </ThemedView>
            </ThemedView>
            
        </ThemedView>
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
    },
    list:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"red"
    }

});
