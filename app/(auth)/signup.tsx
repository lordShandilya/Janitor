import { Alert, ScrollView,  Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import FormField from '@/components/FormField';
import SignUpButtons from "@/components/SignUpButtons";
import { Link, router } from 'expo-router';
import { BackButton } from "@/components/BackButton";

const SignUp = () => {
  const [name,setName] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handlePhoneNumberChange = (text:any) => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    const truncatedText = cleanedText.slice(0, 10);
    setphonenumber(truncatedText);
  };

  const handleSignUp = () => {
    if (password !== repeatPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    if (phonenumber.length !== 10) {
      Alert.alert('Error', 'Phone number must be 10 digits.');
      return;
    }
    router.push('/enterdetails');
  };
  return (
    <SafeAreaView className=" bg-white h-full">
      <BackButton light="#0066F6" dark="#0066F6" onPress={() => router.back()} style={{marginLeft: 20, alignSelf: 'flex-start',paddingTop:10}}/>
      <ScrollView>
          <View className='w-full justify-center px-4'>
              <Text className='text-4xl font-kbold text-primary mt-14'>Create Account</Text>
              <Text className='text-lg mt-2 font-kregular'>Open MyApp account with a few details</Text>
              <View className='mt-7'>
                <FormField 
                    title="Full Name"
                    value = {name}
                    handleChangeText = {setName}
                    otherStyles="mt-10"
                    hidden = {false}
                    keyType="default"
                />
                <FormField 
                    title="Phone Number"
                    value = {phonenumber}
                    handleChangeText = {handlePhoneNumberChange}
                    otherStyles="mt-7"
                    hidden = {false}
                    keyType="numeric"
                />
                <FormField 
                    title="Password"
                    value = {password}
                    handleChangeText = {setPassword}
                    otherStyles="mt-7"
                    hidden = {true}
                    keyType="default"
                />
                <FormField 
                    title="Repeat Password"
                    value = {repeatPassword}
                    handleChangeText = {setRepeatPassword}
                    otherStyles="mt-7"
                    hidden = {true}
                    keyType="default"
                />
              </View>
              <View className='w-full'>
              <SignUpButtons
                  title="CREATE YOUR ACCOUNT"
                  handlePress={handleSignUp}    
                  containerStyles = "bg-primary mt-20"
                  textStyles = "text-white font-ksemibold"
                  opacity={0.7}
              />
              <Text className='text-center mt-1 text-sm'>Do you already have an account? <Link href="/signin" className='text-primary'>Sign In Here</Link></Text>
              </View>
          </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

export default SignUp
