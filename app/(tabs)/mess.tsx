import { Alert, SafeAreaView, StyleSheet, View } from "react-native"
import { RectButton } from "@/components/MessButtons"
import { BlueBox } from "@/components/BlueBox"
import { ThemedText } from "@/components/ThemedText"

export default function Mess() {
    return (
        <SafeAreaView>
            <BlueBox/>
            <View style = {styles.upperSection}>
                <RectButton type="pay" onPress={() => Alert.alert('payment under development.')}/>
                <RectButton type="coupon"/>
            </View>
            <View style = {styles.lowerSection}>
                <ThemedText type="defaultSemiBold">Get all your mess information</ThemedText>
                <RectButton type="leave"/>
                <RectButton type="menu"/>
                <RectButton type="bill"/>
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