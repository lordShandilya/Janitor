
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Ripple from './ui/animations/RippleEffect';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function DropDown() {

    const optionsList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [visible, setVisible] = useState(false);
    const scale = useSharedValue(0);

    const [selectedOption, setSelectedOption] = useState('Monday');


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withTiming(scale.value, { duration: 300 }) }],
            opacity: withTiming(scale.value, { duration: 300 }),
        };
    });


    function pressHandler() {
        // console.log("I have been pressed");
        setVisible(!visible);
        scale.value = visible ? 0 : 1;
    }

    return (
        <View >

            {/* <Text>Jai Mata Di</Text> */}

            <View className='flex flex-col items-center'>
                <Pressable
                    className="bg-[#D9D9D9] w-48 border border-[#D9D9D9] rounded-2xl h-9 flex flex-row justify-center items-center"
                    onPress={pressHandler}
                >
                    <View className="flex flex-row grow justify-evenly">
                        <Text className=" text-center grow font-bold font-poppins-extrabold text-xl">
                            {selectedOption}
                        </Text>
                        <Text className=" mx-2 my-auto">
                            <AntDesign  name="down" size={15} color="black" />
                            <AntDesign />
                        </Text>
                    </View>

                </Pressable>

                {/* Width of the below dropdown should be exactly equal to the Pressable */}
               

                    { visible && <Animated.View
                        className="absolute mt-4 w-48 bg-white shadow-lg rounded-lg p-4"
                        style={animatedStyle}
                    >
                        <DropDownMenu optionsList={optionsList} optionsHandler={setSelectedOption}/>
                    </Animated.View>}

            </View>
            {/* 
            <Ripple
        onTap={() => {
          console.log('tap');
        }}
      >
        <Text style={{ fontSize: 25 }}>Tap</Text>
      </Ripple> */}

        </View>
    )
}




const DropDownMenu = ({ optionsList, optionsHandler }: { optionsList: Array<string> , optionsHandler:(option:string)=>void}) => {

    return (
        <View className="bg-[#D9D9D9] w-48 border border-[#D9D9D9] rounded-md my-1">
            {
                optionsList.map((e:string, i:number) => {

                    return (
                        <Ripple key={i}  onTap={()=>optionsHandler(e)}>
                            <Text className=" font-poppins-medium text-center py-2">{e}</Text>
                        </Ripple>
                    )
                })
            }
        </View>
    )
}