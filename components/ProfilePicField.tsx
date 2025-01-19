import { StyleSheet } from "react-native"
import { ThemedView, ThemedViewProps } from "./ThemedView"

export type ProfilePicFieldProps =ThemedViewProps & {
    profile_pic?: string
}

export function ProfilePicField({ profile_pic }: ProfilePicFieldProps) {
    return (
        <ThemedView style = {[
            styles.container,
            { backgroundImage: profile_pic }
        ]}>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 100,
        backgroundColor: 'white'
    }
})