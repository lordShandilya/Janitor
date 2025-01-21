import { Image, StyleSheet } from "react-native"
import { ThemedView, ThemedViewProps } from "./ThemedView"
import { useState } from "react"

export type ProfilePicFieldProps =ThemedViewProps & {
    profile_pic?: string
}

export function ProfilePicField({ profile_pic }: ProfilePicFieldProps) {
    const [pfp, setPfp] = useState<string | undefined>(profile_pic);



    return (
        <ThemedView style = {[
            styles.container,
            { backgroundImage: profile_pic }
        ]}>
        {/* <Image source={}/> */}

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