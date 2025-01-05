import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CamScanner from "@/components/CamScanner";
import { StyleSheet } from "react-native";





export default function Scan() {
    return(
        <ThemedView style = {{flex: 1}}>
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
        height: 136,
        width: 420,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    container: {
        marginTop: 100
    }
})

