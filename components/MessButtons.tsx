import { Pressable, PressableStateCallbackType, StyleSheet, View, type PressableProps } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemedColors";
import { Link } from "expo-router";

export type RectButtonProps = PressableProps & {
    type?: 'pay' | 'coupon' | 'leave' | 'menu' | 'bill';
    darkcolor?: string;
    lightcolor?: string;
    
}

export function RectButton({ type, darkcolor, lightcolor, ...rest }: RectButtonProps) {
    const tintColor = useThemeColor({ light: lightcolor, dark: darkcolor }, 'tint');
    const iconColor = useThemeColor({ light: lightcolor, dark: darkcolor},'icon');

    return (
        <Pressable style = {[
            type === 'pay' ? styles.paySelection : undefined,
            type === 'coupon' ? styles.couponSelection : undefined,
            type === 'bill' || type === 'leave' || type === 'menu' ? styles.bottomSelections : undefined,
            
        ]}
        {...rest}
        >

            {/* this clearly needs a array of map  */}
            <ThemedView darkColor={type === 'pay' || type === 'coupon' ? ' #00000000': undefined} style = {styles.viewStyle}>
                
                {type === 'leave' && <ThemedText type="default">Apply for leave in mess</ThemedText>}
                {type === 'menu' && <ThemedText type="default"><Link href={"/(tabs)/menu"}>Know today's menu</Link></ThemedText>}
                {type === 'bill' && <ThemedText type="default">upCheck your monthly bill</ThemedText>}
                {type === 'pay' && <ThemedText type="default">Pay</ThemedText>}
                {type === 'coupon' && <ThemedText type="default">Add coupons</ThemedText>}
                {/* <AntDesign name="right" size={16} color={iconColor} /> */}
                {type === 'pay' || type === 'coupon' ? undefined : <AntDesign name="right" size={16} color={iconColor} />}
            </ThemedView>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    bottomSelections: {
        width: 378,
        height: 66,
        borderRadius: 7,
        borderColor: '#C9C9C9'
    },
    paySelection: {
        width: 180,
        height: 60,
        borderRadius: 7,
        backgroundColor: '#FD9101'
    },
    couponSelection: {
        width: 180,
        height: 60,
        borderRadius: 7,
        backgroundColor: '#36C4A2'
    },
    viewStyle: {
       flex: 1, 
       padding: 15,
       gap: 8,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 7
       
    }
})