import { Alert, SafeAreaView, StyleSheet, View, Text } from "react-native"
import { useRouter } from "expo-router"
import { RectButton } from "@/components/RectButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useThemeColor } from "@/hooks/useThemedColors"
import { useJanitorStore } from "@/utils/Store"


export default function Mess() {
    const router = useRouter();
    const iconColor = useThemeColor({ light: undefined, dark: undefined}, 'icon');
    const amount = useJanitorStore(state => state.coupons.balance)
    
    return (
        <ThemedView style = {styles.container}>
           
            <View style={[styles.box]}>
            <ThemedText type="default" lightColor="#ECEDEE" darkColor="#ECEDEE" className="text-xl">
                Coupons remaining
            </ThemedText>
            <ThemedText type="title" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Rs. { amount }
            </ThemedText>
        </View>
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
    },
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    box: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0066F6',
        height: 180,
        width: 382,
        marginTop: 75,
        borderRadius: 10,

    }
})