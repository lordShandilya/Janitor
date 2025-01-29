import { StatusBar } from "expo-status-bar";
import { StyleSheet,ScrollView, Text,View } from 'react-native';
import { Redirect,router,Link, Stack } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image'; 
import SignUpButtons from "@/components/SignUpButtons";

export default function App(){
    return(
        <View>
            <SafeAreaView>
                <ScrollView contentContainerStyle={{height:'100%'}}>
                <View style={styles.container}>
                    <Image  source={require("../../assets/images/welcome.gif")} 
                        style={styles.image} 
                        contentFit="contain"
                     />
                    <Text className="text-3xl font-kbold mt-10">Welcome to MyApp</Text> 
                    <Text className="text-lg font-klight mt-5">The app for everyone</Text>  

                    <SignUpButtons 
                        title="CREATE YOUR ACCOUNT"
                        handlePress={()=>router.push('/signup')}    
                        containerStyles = "w-96 bg-primary mt-44"
                        textStyles = "text-white font-ksemibold"
                        opacity={0.7}
                    />
                    <SignUpButtons 
                        title="LOG INTO YOUR ACCOUNT"
                        handlePress={()=>{router.push('/')}}    
                        containerStyles = "w-96 mt-3 border"
                        textStyles = "font-ksemibold"
                        opacity={0.3}
                    />
                </View>
                </ScrollView>
            </SafeAreaView>
            <StatusBar style="auto"/>

        </View>
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
