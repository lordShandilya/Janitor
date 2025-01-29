import { Image, StyleSheet } from "react-native";
import { ThemedView, ThemedViewProps } from "./ThemedView";
import { useState } from "react";

export type ProfilePicFieldProps = ThemedViewProps & {
    profile_pic?: string;
};

export function ProfilePicField({ profile_pic, style }: ProfilePicFieldProps) {
    const [pfp, setPfp] = useState<string | undefined>(profile_pic);

    return (
        <ThemedView
            style={[
                styles.container,
                style, // Merge external styles passed via `style` prop
            ]}
        >
            {/* Optional: Add an Image if `profile_pic` exists */}
            {pfp ? (
                <Image
                    resizeMode="contain"
                    source={require('@/assets/images/panda.jpg')}
                    style={StyleSheet.absoluteFillObject} // Fill the container
                />
            ) : null}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 75, // Correct circle radius (half of width/height)
        backgroundColor: "white",
        overflow: "hidden", // Prevents content overflow
    },
});
