import { ProfilePicField } from "@/components/ProfilePicField";
import { Pressable,Text } from "react-native";
import { View } from "react-native";
import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Profile() {
    return (
        <View  className="flex items-center ">
            <View className="relative w-full">
            <ImageBackground
                resizeMode="cover"
                source={require('@/assets/images/Rectangle.png')}
                className="w-full h-80 items-center justify-end"
                >
                {/* Floating ProfilePicField */}
                <ProfilePicField  style={{
                                        height: 150,
                                        width: 150,
                                        position: 'absolute', 
                                        bottom: -50,}} />
            </ImageBackground>
            </View>
            <Text  className="mt-16 text-4xl font-kbold">Abid</Text>
            <Text  className="mt-1 text-lg text-wrap font-kbold">youremail@domain.com | +01 234 567 789</Text>
            <View className="w-11/12 flex m-4">
                <View className="flex flex-col m-2 w-full gap-4 border-dotted p-4 border-black border-2">
                    <View className="flex flex-row items-center ">
                        <Octicons name="number" size={24} color="black" className="basis-1/4"/>
                        <Text className="basis-2/4 font-kbold text-lg">Roll Number</Text>
                        <Text className="basis-2/4 font-kbold text-lg">22042XX</Text>
                    </View>
                    <View className="flex flex-row items-center">
                        <FontAwesome5 name="building" size={24} color="black" className="basis-1/4" />
                        <Text className="basis-2/4 font-kbold text-lg">Hostel</Text>
                        <Text className="basis-2/4 font-kbold text-lg">Aryabhatta</Text>
                    </View>
                    <View className="flex flex-row items-center">
                        <FontAwesome6 name="bed" size={24} color="black" className="basis-1/4"/>
                        <Text className="basis-2/4 font-kbold text-lg">Room Number</Text>
                        <Text className="basis-2/4 font-kbold text-lg">402</Text>
                    </View>
                </View>
                <View className="flex flex-col m-2 w-full gap-4 border-dotted p-4 border-black border-2">
                    <Pressable className="flex flex-row ">
                        <MaterialIcons name="support-agent" size={24} color="black" className="basis-1/4"/>
                        <Text className="basis-3/4 font-kbold text-lg">Help and Support</Text>
                    </Pressable>
                    <Pressable className="flex flex-row ">
                        <FontAwesome6 name="contact-card" size={24} color="black" className="basis-1/4"/>
                        <Text className="basis-3/4 font-kbold text-lg">Conatact Us</Text>
                    </Pressable>
                    <Pressable className="flex flex-row ">
                    <MaterialIcons name="privacy-tip" size={24} color="black" className="basis-1/4"/>
                        <Text className="basis-3/4 font-kbold text-lg">Privacy Policy</Text>
                    </Pressable>
                </View>
            </View>
            
        </View>
    );
}

