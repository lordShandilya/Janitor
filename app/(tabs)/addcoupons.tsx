import { BackButton } from "@/components/BackButton";
import { PriceInputField } from "@/components/PriceInputField";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useThemeColor } from "@/hooks/useThemedColors";
import { useJanitorStore } from "@/utils/Store";
import { Text } from "react-native";

export default function AddCoupons() {
    const iconColor = useThemeColor({dark: undefined, light: undefined}, 'icon');
    const prefix = "\u20B9 ";
    const balance = useJanitorStore(state => state.coupons.balance)
    return (
        <View style={styles.container}>
            <BackButton onPress={() => router.back()}  light="#0066F6"/>
            <ThemedText type="title" darkColor="#0066F6" lightColor="#0066F6" style={styles.heading}>Add Coupons</ThemedText>
            <Text className="font-kmedium mt-3">Remaining coupon balance: {prefix} {balance}</Text>
            
            <PriceInputField/>
            <View style = {styles.bottom}>
            <Feather name="info" size={20} color={iconColor} />
            <Text className="font-thin"> you can only add upto {"\u20B9"} 1000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    heading: {
        marginTop: 170,
        fontWeight: 'bold'
    },
    bottom: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
        alignItems: 'center'
    },
})