import { View, Text, TextInput, StyleSheet, Alert, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import { useJanitorStore } from "@/utils/Store";

export function PriceInputField() {
    const prefix = "\u20B9 ";
    const [amount, setAmount] = useState('');
    const increaseBalance = useJanitorStore(state => state.coupons.increment)

    useFocusEffect(
        useCallback(() => {
            setAmount('');
            let index = 0;
            const interval = setInterval(() => {
                const def = prefix+'0';
                if(index < def.length) {
                    
                    setAmount(prev => prev+def[index]);
                    index++;
                } else {
                clearInterval(interval);
                }

            }, 500);

            return () => clearInterval(interval);
        }, [])
    );

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

        increaseBalance(added);
        setAmount(prefix+"0");
        Alert.alert(amount + " added to your coupons.");
    }



    return (
        <View style={styles.rootContainer}>
        <View style={styles.container}>
            <Text className="font-kextrabold text-3xl">Enter Amount</Text>
            <TextInput 
                keyboardType="numeric"
                style={styles.input}
                value={amount}
                onChangeText={handleChange}
                onSubmitEditing={handleInput}
                className="font-thin text-black-200"
            />
                
            
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 5
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
    }
})
