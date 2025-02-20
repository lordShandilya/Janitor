import { ScrollView,  Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import FormField from '@/components/FormField';
import SignUpButtons from "@/components/SignUpButtons";
import { router } from 'expo-router';
import { BackButton } from "@/components/BackButton";

const forgotPassword= () => {
  
  const [phonenumber, setphonenumber] = useState('');

  const handlePhoneNumberChange = (text:string) => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    const truncatedText = cleanedText.slice(0, 10);
    setphonenumber(truncatedText);
  };

  return (
    <SafeAreaView className=" bg-white h-full">
      <BackButton light="#0066F6" dark="#0066F6" onPress={() => router.back()} style={{marginLeft: 20, alignSelf: 'flex-start',paddingTop:10}}/>
      <ScrollView>
          <View className='w-full justify-center px-4'>
              <Text className='text-4xl font-kbold text-primary mt-14'>Forgot Password?</Text>
              <Text className='text-lg mt-2 font-kregular'>Please enter your phone number to recover your password</Text>
              <View className='mt-10'>
                <FormField 
                    title="Phone Number"
                    value = {phonenumber}
                    handleChangeText = {handlePhoneNumberChange}
                    otherStyles="mt-7"
                    hidden = {false}
                    keyType="numeric"
                />
              </View>
              <View className='w-full mt-safe-or-80'>
              <SignUpButtons
                  title="RECOVER PASSWORD"
                  handlePress={()=>{router.push('/recoverPassword')}}    
                  containerStyles = "bg-primary mt-20"
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

export default forgotPassword
