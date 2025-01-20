import { Alert, SafeAreaView, StyleSheet, View } from "react-native"
import { useRouter } from "expo-router"
import { RectButton } from "@/components/MessButtons"
import { BlueBox } from "@/components/BlueBox"
import { ThemedText } from "@/components/ThemedText"

export default function Mess() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <BlueBox amount={500}/>
            <View style = {styles.upperSection}>
                <RectButton type="pay" onPress={() => router.push('/(tabs)/scan')}/>
                <RectButton type="coupon" onPress={() => Alert.alert('portal under development')}/>
            </View>
            <View style = {styles.lowerSection}>
                <ThemedText type="defaultSemiBold">Get all your mess information</ThemedText>
                <RectButton type="leave" onPress={() => Alert.alert('portal under development')}/>
                <RectButton type="menu" onPress={() => () => router.push('/(tabs)/menu')}/>
                <RectButton type="bill" onPress={() => Alert.alert('portal under development')}/>
            </View>
        </SafeAreaView>
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
    }
})