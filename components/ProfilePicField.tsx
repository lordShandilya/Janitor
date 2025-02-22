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
                    source={{uri:"https://images.unsplash.com/photo-1525382455947-f319bc05fb35?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
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
