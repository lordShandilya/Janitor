import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CamScanner from "@/components/CamScanner";
import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import { useThemeColor } from "@/hooks/useThemedColors";
import { useJanitorStore } from "@/utils/Store";





export default function Scan() {
    const iconColor = useThemeColor({dark: undefined, light: undefined}, 'icon');
    const router = useRouter();


    return(
        <ThemedView style = {{flex: 1}}>
            <Pressable onPress={() => router.back()} >
                <Entypo name="cross" size={30} color={iconColor} style = {styles.backButton}/>
            </Pressable>
            
            <CamScanner style = {styles.container}/>

            <ThemedView style = {styles.bottom}>
                <ThemedText lightColor="#ECEDEE" type="title">Scan QR</ThemedText>
            </ThemedView>
        </ThemedView>
    )
    
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#0066F6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 420,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    container: {
        marginTop: 100,
        
    },
    backButton: {
        margin: 30,
        position: 'absolute'

    },
})

