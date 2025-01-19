import { Alert, Pressable, View, Text, StyleSheet, type PressableProps, StyleProp, ViewStyle, PressableStateCallbackType } from "react-native";
import { ThemedText } from "./ThemedText";
import { ReactNode } from "react";
import { ThemedView } from "./ThemedView";
import Animated, {useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence} from "react-native-reanimated";


export type RectButtonProps = PressableProps & {
    tag?: string,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>,
    darkColor?: string,
    lightColor?: string,
    route: () => void,
    children?: ReactNode
}

export function RectButton({ tag, style, backgroundColor, darkColor, lightColor, route, children, ...rest }: RectButtonProps) {
    const offset = useSharedValue<number>(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: offset.value}]
    }));

    const OFFSET = 5;
    const TIME = 250;

    const clickAnimation = () => {
        offset.value = withSequence(
          withTiming(-OFFSET, { duration: TIME/2}),
          withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
          withTiming(0, {duration: TIME/2})
        )
    }


    return (
        <Animated.View
            style = {animatedStyle}
        >
        <Pressable
            style={[
                { backgroundColor },
                style,
                styles.button
            ]}
            onPress = {() => {
                setTimeout(() => {
                    route();
                }, 500)
                clickAnimation()
            }}
            {...rest}
        >
            
            <ThemedText type="defaultSemiBold" darkColor={darkColor} lightColor={lightColor}>{ tag }</ThemedText>
            { children }
           
           
        </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

