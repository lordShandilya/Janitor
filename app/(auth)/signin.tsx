import { ScrollView,  Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import FormField from '@/components/FormField';
import SignUpButtons from "@/components/SignUpButtons";
import { Link, router } from 'expo-router';
import { BackButton } from "@/components/BackButton";
import { loginService } from '@/utils/auth';
import * as SecureStore from "expo-secure-store";

const SignIn = () => {
  
  const [phonenumber, setphonenumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (text:any) => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    const truncatedText = cleanedText.slice(0, 10);
    setphonenumber(truncatedText);
  };

  const handleSignIn = async () => {
    const {accessToken, refreshToken} = loginService({ roll: parseInt(phonenumber), password });
    if(accessToken && refreshToken) {
      await SecureStore.setItemAsync("accessToken", accessToken);
      await SecureStore.setItemAsync("refreshToken", refreshToken);
      router.push('/');
    }
  };

  return (
    <SafeAreaView className=" bg-white h-full">
      <BackButton light="#0066F6" dark="#0066F6" onPress={() => router.back()} style={{marginLeft: 20, alignSelf: 'flex-start',paddingTop:10}}/>
      <ScrollView>
          <View className='w-full justify-center px-4'>
              <Text className='text-4xl font-kbold text-primary mt-14'>Sign into your Account</Text>
              <Text className='text-lg mt-2 font-kregular'>Login to your MyApp Account</Text>
              <View className='mt-7'>
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
                <Text className='text-primary mt-3'><Link href='/forgotPassword'>Forgot Password?</Link></Text>
              </View>
              <View className='w-full mt-safe-or-52'>
              <SignUpButtons
                  title="LOG IN"
                  handlePress={()=>{router.push('/')}}    
                  containerStyles = "bg-primary mt-20"
                  textStyles = "text-white font-ksemibold"
                  opacity={0.7}
              />
              <Text className='text-center mt-2 text-sm'>Create your Account. <Link href="/signup" className='text-primary'>Sign Up Here</Link></Text>
              </View>
          </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

export default SignIn
