import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


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
        name = "mess"
        options={{
          title: "Mess",
          tabBarIcon: ({ color }) => <FontAwesome6 name="bowl-food" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name = "menu"
        options={{
          href: null,
          tabBarStyle: {display: 'none'}
        }}
      />
      <Tabs.Screen
        name = "scan"
        options={{
          href: null,
          tabBarStyle: {display: 'none'}
        }}
      />
      <Tabs.Screen
        name = "profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="face-man-profile" size={24} color={ color } />
        }}
      />
      <Tabs.Screen
        name = "addcoupons"
        options={{
          href: null,
          tabBarStyle: {display: 'none'}
        }}
      />

      
    </Tabs>
  )
}