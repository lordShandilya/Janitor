import { Alert, ScrollView,  Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import FormField from '@/components/FormField';
import SignUpButtons from "@/components/SignUpButtons";
import { Link, router } from 'expo-router';
import { BackButton } from "@/components/BackButton";

const SignUp = () => {
  const [hostelname,setHostelName] = useState('');
  const [rollnumber, setrollnumber] = useState('');
  const [roomnumber, setroomnumber] = useState('');

  const handleRollNumberChange = (text:any) => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    const truncatedText = cleanedText.slice(0, 7);
    setrollnumber(truncatedText);
  };

  return (
    <SafeAreaView className=" bg-white h-full">
      <BackButton light="#0066F6" dark="#0066F6" onPress={() => router.back()} style={{marginLeft: 20, alignSelf: 'flex-start',paddingTop:10}}/>
      <ScrollView>
          <View className='w-full justify-center px-4'>
              <Text className='text-4xl font-kbold text-primary mt-14'>Enter your details</Text>
              <Text className='text-lg mt-2 font-kregular'>Help us complete your profile</Text>
              <View className='mt-7'>
                <FormField 
                    title="Hostel Name"
                    value = {hostelname}
                    handleChangeText = {setHostelName}
                    otherStyles="mt-10"
                    hidden = {false}
                    keyType="default"
                />
                <FormField 
                    title="Roll Number"
                    value = {rollnumber}
                    handleChangeText = {handleRollNumberChange}
                    otherStyles="mt-7"
                    hidden = {false}
                    keyType="numeric"
                />
                <FormField 
                    title="Room Number"
                    value = {roomnumber}
                    handleChangeText = {setroomnumber}
                    otherStyles="mt-7"
                    hidden = {false}
                    keyType="numeric"
                />
              </View>
              <View className='w-full'>
              <SignUpButtons
                  title="LET'S GO!"
                  handlePress={()=>{router.push('/')}}    
                  containerStyles = "bg-primary mt-32"
                  textStyles = "text-white font-ksemibold"
                  opacity={0.7}
              />
              <Text className='text-center mt-3 text-sm'>Do you already have an account? <Link href="/signin" className='text-primary'>Sign In Here</Link></Text>
              </View>
          </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

export default SignUp