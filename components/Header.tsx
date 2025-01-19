import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export default function Header() {
    return (
        <ThemedView style = {styles.header}>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 455,
        width: 418,

    }
})