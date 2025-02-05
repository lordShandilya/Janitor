import {TextInput, Text, View } from 'react-native'
import React, { useState } from 'react'

const FormField = ({title,value,handleChangeText,otherStyles,hidden,keyType} : {title:any,value:any,handleChangeText:any,otherStyles:any,hidden:any,keyType:any}) => {
    const [showPassword,setshowPassword] = useState(false);
  
    return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className='font-ksemibold text-base'>{title}</Text>
      <View className='w-full h-16 px-4 rounded-lg bg-stone-100'>
        <TextInput
            className='flex-1 font-kregular text-lg'
            value = {value}
            onChangeText={handleChangeText}
            secureTextEntry = {hidden}
            keyboardType={keyType}
        />
      </View>
    </View>
  )
}

export default FormField
