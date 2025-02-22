import { StatusBar } from "expo-status-bar";
import { StyleSheet,ScrollView, Text,View } from 'react-native';
import { Redirect,router,Link, Stack } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image'; 
import SignUpButtons from "@/components/SignUpButtons";

export default function App(){
    return(
        <SafeAreaView style={styles.container}>
                    <Image  source={require("../../assets/images/welcome.gif")} 
                        style={styles.image} 
                        contentFit="contain"
                     />
                    <Text className="text-3xl font-kbold mt-10">Welcome to MyApp</Text> 
                    <Text className="text-lg font-klight mt-5">The app for everyone</Text>      

                    <View className="w-full px-4">
                        <SignUpButtons
                            title="CREATE YOUR ACCOUNT"
                            handlePress={()=>router.push('/signup')}    
                            containerStyles = "bg-primary mt-44"
                            textStyles = "text-white font-ksemibold"
                            opacity={0.7}
                        />
                        <SignUpButtons 
                            title="LOG INTO YOUR ACCOUNT"
                            handlePress={()=>{router.push('/')}}    
                            containerStyles = "mt-3 border"
                            textStyles = "font-ksemibold"
                            opacity={0.3}
                        />
                    </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        top:40,
        width: 300,
        height: 300,
    },
  });
