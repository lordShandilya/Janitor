import { View, Text, TextInput, StyleSheet, Alert, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useState } from "react";

export function PriceInputField() {
    const prefix = "\u20B9 ";
    const [amount, setAmount] = useState(prefix+"0");
    const [balance, setBalance] = useState<number>(0);
    const handleChange = (newText: string) => {
        if(!newText.startsWith(prefix)) {
            setAmount(prefix);
        } else {
            setAmount(newText);
        }
    }

    const handleInput = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        

        const cleanStr = amount.replace(/[^\d.-]/g, "");
        if(cleanStr === ''){
            Alert.alert('The input is empty.');
            return;
        }
        const added: number = parseInt(cleanStr);

        
        
        if(added > 1000) {
            Alert.alert('Entered amount cannot be more than '+prefix+'1000');
            setAmount(prefix+"0");
            return;
        }

        setBalance(prev => prev+added);
        setAmount(prefix+"0");
        Alert.alert(amount + " added to your coupons.");
    }



    return (
        <ThemedView style={styles.rootContainer}>
        <ThemedText type="defaultSemiBold">Remaining coupon balance: {prefix} {balance}</ThemedText>
        <ThemedView style={styles.container}>
            <ThemedText darkColor="#9BA1A6" lightColor="#9BA1A6" type="default" style = {styles.header}>Enter Amount</ThemedText>
            <TextInput 
                keyboardType="numeric"
                style={styles.input}
                value={amount}
                onChangeText={handleChange}
                onSubmitEditing={handleInput}
            />
                
            
        </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 20
    },
    container: {
        marginTop: 50,
        borderColor: "#C9C9C9",
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 20,
        gap: 15
    },
    header: {
        fontSize: 24
    },
    input: {
        fontSize: 30,
        gap: 20,
        color: '#ECEDEE'
    }
})
