import { Alert, SafeAreaView, StyleSheet, View } from "react-native"
import { useRouter } from "expo-router"
import { RectButton } from "@/components/RectButton"
import { BlueBox } from "@/components/BlueBox"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useThemeColor } from "@/hooks/useThemedColors"


export default function Mess() {
    const router = useRouter();
    const iconColor = useThemeColor({ light: undefined, dark: undefined}, 'icon');
    
    return (
        <ThemedView style = {{flex: 1}}>
            <ThemedText type="title" style={{flex: 1, position: 'absolute', margin: 40}}>Hello, Vishal</ThemedText>
            <BlueBox amount={500} />
            <ThemedView style = {styles.upperSection}>
                <RectButton 
                    tag="Pay"
                    style = {styles.colouredButton}
                    backgroundColor="#FD9101"
                    route={() => router.push('/(tabs)/scan')}
                />
                <RectButton 
                    tag="Add coupons"
                    style = {styles.colouredButton}
                    backgroundColor="#36C4A2"
                    route={() => router.push('/(tabs)/addcoupons')}
                />
            </ThemedView>
            <ThemedView style = {styles.lowerSection}>
                <ThemedText type="defaultSemiBold">Get all your mess information</ThemedText>
                <RectButton 
                    tag="Apply for leave in mess"
                    style = {styles.colourlessButton}
                    children = {<AntDesign name="right" size={16} color={iconColor} />}
                    route={() => Alert.alert('portal under development')}
                />
                <RectButton 
                    tag="Menu"
                    style = {styles.colourlessButton}
                    children = {<AntDesign name="right" size={16} color={iconColor} />}
                    route={() => router.push('/(tabs)/menu')}
                />
                <RectButton 
                    tag="Check Bill"
                    style = {styles.colourlessButton}
                    children = {<AntDesign name="right" size={16} color={iconColor} />}
                    route={() => Alert.alert('portal under development')}
                />
                
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    upperSection: {
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        margin: 25
    },
    lowerSection: {
        gap: 20,
        margin: 25
    },
    colouredButton: {
        width: 180,
        height: 60,
        borderRadius: 7,
        opacity: 0.7
    },
    colourlessButton: {
        width: 378,
        height: 66,
        gap: 30,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        backdropFilter: 'blur(20px)',
        overflow: 'hidden'
    }
})