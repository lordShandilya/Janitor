import { StyleSheet, TextInput, View, Text, type TextInputProps, type ViewProps } from "react-native";

export type TextInputFieldProps = TextInputProps & ViewProps &{
    tag?: string;
}

export function TextInputField({ tag, style, ...rest }: TextInputFieldProps) {
    
    return (
        <View style = {[
            style
        ]}>
            <Text>{tag}</Text>
            <TextInput
                keyboardType="default"
                style = {[
                    styles.input
                ]}
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 7,
        borderWidth: 7,
        height: 42,
        width: 352,
    

    },
    field: {
        alignItems: 'center',
        justifyContent: 'center'
    }

})