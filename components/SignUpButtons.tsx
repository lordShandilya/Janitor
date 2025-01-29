import { TouchableOpacity, Text} from 'react-native';
import React from 'react';

const SignUpButtons = ({title,handlePress,containerStyles,textStyles,opacity} : {title:any,handlePress:any,containerStyles:any,textStyles:any,opacity:any} ) => {
  return (
    <TouchableOpacity 
      className={`rounded-md min-h-14 justify-center items-center ${containerStyles}`}
      onPress={handlePress}
      activeOpacity={opacity}
    > 
      <Text className={`text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SignUpButtons
