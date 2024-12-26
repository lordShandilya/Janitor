import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";



export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: '#0066F6',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name = "index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name = "menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-alt" color={color} />
        }}
      />

      
    </Tabs>
  )
}