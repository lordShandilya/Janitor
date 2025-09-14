import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen,Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "@/global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvider, useAuth } from "@/components/contexts/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded,error] = useFonts({
    "Karla-Bold": require("../assets/fonts/Karla-Bold.ttf"),
    "Karla-ExtraLight": require("../assets/fonts/Karla-ExtraLight.ttf"),
    "Karla-Light": require("../assets/fonts/Karla-Light.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
    "Karla-Medium": require("../assets/fonts/Karla-Medium.ttf"),
    "Karla-SemiBold": require("../assets/fonts/Karla-SemiBold.ttf"),
    "Karla-ExtraBold": require("../assets/fonts/Karla-ExtraBold.ttf"),
  })

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded && !error) return null;
  
  
  return (
    <AuthProvider>  
    <GestureHandlerRootView>
    <ThemeProvider value={DefaultTheme}>
      <Navigator/>
      <StatusBar style='light'/>
    </ThemeProvider>
    </GestureHandlerRootView>
    </AuthProvider>
  )
}


const Navigator = () => {
  const { token, isLoading } = useAuth();
  if(isLoading) return null;

  return (
    <Stack screenOptions={{
        gestureEnabled: true,
        animation: "fade_from_bottom",
        headerShown: false
      }}>
        {token === null ? (
          <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        ) : (
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />

        )}
    </Stack>
  )
}