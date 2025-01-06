import { Alert, Pressable, View, Text, StyleSheet, type PressableProps, StyleProp, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";

export type RectButtonProps = PressableProps & {
    tag?: string,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>,
    darkColor?: string,
    lightColor?: string
}

export function RectButton({ tag, style, backgroundColor, darkColor, lightColor, ...rest }: RectButtonProps) {
    return (
        
        <Pressable
            style={[
                { backgroundColor },
                style,
                styles.button
            ]}
            {...rest}
        >
           <ThemedText type="defaultSemiBold" darkColor={darkColor} lightColor={lightColor}>{ tag }</ThemedText>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 40,
        borderRadius: 10,
    }
})

