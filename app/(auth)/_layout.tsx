import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none"}
      }}
    >
        <Tabs.Screen name = "index"/>
        <Tabs.Screen name = "signup"/>
        <Tabs.Screen name = "signin"/>
        <Tabs.Screen name = "verify"/>
        <Tabs.Screen name = "enterdetails"/>
        
    </Tabs>
  )
}