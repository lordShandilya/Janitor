import { Alert, ScrollView,  Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import FormField from '@/components/FormField';
import SignUpButtons from "@/components/SignUpButtons";
import { Link, router } from 'expo-router';
import { BackButton } from "@/components/BackButton";

const RecoverPassword = () => {
  
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');

const handleSignUp = () => {
    if (password !== repeatPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    router.push('/');
  };
  return (
    <SafeAreaView className=" bg-white h-full">
      <BackButton light="#0066F6" dark="#0066F6" onPress={() => router.back()} style={{marginLeft: 20, alignSelf: 'flex-start',paddingTop:10}}/>
      <ScrollView>
          <View className='w-full justify-center px-4'>
              <Text className='text-4xl font-kbold text-primary mt-14'>Recover Password</Text>
              <Text className='text-lg mt-2 font-kregular'>Please enter your new password to continue</Text>
              <View className='mt-7'>
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
              <View className='w-full mt-safe-or-64'>
              <SignUpButtons
                  title="CHANGE PASSWORD"
                  handlePress={handleSignUp}    
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

export default RecoverPassword
