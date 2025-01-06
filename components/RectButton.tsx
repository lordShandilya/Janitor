import { Alert, Pressable, View, Text, StyleSheet, type PressableProps, StyleProp, ViewStyle, PressableStateCallbackType } from "react-native";
import { ThemedText } from "./ThemedText";
import { ReactNode } from "react";
import { ThemedView } from "./ThemedView";

export type RectButtonProps = PressableProps & {
    tag?: string,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>,
    darkColor?: string,
    lightColor?: string,
    children?: ReactNode
}

export function RectButton({ tag, style, backgroundColor, darkColor, lightColor, children, ...rest }: RectButtonProps) {
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
            { children }
           
           
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

