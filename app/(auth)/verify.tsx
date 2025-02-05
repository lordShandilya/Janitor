import { Alert, ScrollView,  Text, View,StyleSheet, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import SignUpButtons from "@/components/SignUpButtons";
import { router } from 'expo-router';
import { BackButton } from "@/components/BackButton";

const Verify = () => {

    const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
    const inputs = useRef<Array<TextInput | null>>([]);
    

  const handleChange = (text:string, index:number) => {
    if (/^\d$/.test(text)) {
      const newDigits = [...digits];
      newDigits[index] = text;
      setDigits(newDigits);
      
      if (index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }else if (text === "") {
      const newDigits = [...digits];
      newDigits[index] = "";
      setDigits(newDigits);
    }
  };

  const handleKeyPress = (e:any, index:number) => {
    if (e.nativeEvent.key === "Backspace" && digits[index] === "") {
      if (index > 0 && inputs!==null) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <SafeAreaView className=" bg-white h-full">
      <BackButton light="#0066F6" dark="#0066F6" onPress={() => router.back()} style={{marginLeft: 20, alignSelf: 'flex-start',paddingTop:10}}/>
      <ScrollView>
          <View className='w-full justify-center px-4'>
              <Text className='text-4xl font-kbold text-primary mt-14'>Verify Account</Text>
              <Text className='text-lg mt-2 font-kregular'>Please enter the <Text className='font-ksemibold'>CODE</Text> sent to your phone number in the boxes below </Text>
              <View style={styles.container}>
                    {digits.map((digit, index) => (
                        <TextInput
                        key={index}
                        ref={(el) => (inputs.current[index] = el)}
                        style={styles.box}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        />
                    ))}
                </View>
              <View className='w-full'>
              <SignUpButtons
                  title="VERIFY PHONE"
                  handlePress={()=>{router.push('/enterdetails')}}    
                  containerStyles = "bg-primary mt-32"
                  textStyles = "text-white font-ksemibold"
                  opacity={0.7}
              />
            </View>
          </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

export default Verify

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    box: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      textAlign: "center",
      fontSize: 24,
      margin: 5,
      borderRadius: 5,
    },
  });
  