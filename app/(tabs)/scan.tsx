import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CamScanner from "@/components/CamScanner";
import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import { useThemeColor } from "@/hooks/useThemedColors";
import { useJanitorStore } from "@/utils/Store";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";
import { horizontalScale, verticalScale } from "@/utils/Scale";




export default function Scan() {
    const iconColor = useThemeColor({dark: undefined, light: undefined}, 'icon');
    const router = useRouter();
    const isFocused = useIsFocused();


    return(
        <View style = {styles.container}>
            <Pressable onPress={() => router.back()} style = {styles.backButton}>
                <Entypo name="cross" size={30} color={iconColor}/>
            </Pressable>
            
            {isFocused && (<CamScanner style = {styles.camContainer}/>)}

            <ThemedView style = {styles.bottom}>
                <ThemedText lightColor="#ECEDEE" type="title">Scan QR</ThemedText>
            </ThemedView>
        </View>
    )
    
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0066F6',
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(100),
        width: horizontalScale(400),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    camContainer: {
        marginTop: 100,
        
    },
    backButton: {
        position: 'absolute',
        margin: 60,
        transform: [{translateX: -170}] 

    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

