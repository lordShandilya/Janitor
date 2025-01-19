import Header from "@/components/Header";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
<<<<<<< HEAD
import "@/global.css"
=======
import { GestureHandlerRootView } from "react-native-gesture-handler";
>>>>>>> 6981512ef95c405af2d6c2e3c508ecbe0b38ee6f

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <GestureHandlerRootView>
    <ThemeProvider value={colorScheme === 'dark'? DarkTheme:DefaultTheme}>
      <Stack screenOptions={{
        gestureEnabled: true,
        animation: "fade_from_bottom"
      }}>
       <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
      </Stack>;
    </ThemeProvider>
    </GestureHandlerRootView>
  )
}
