import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MenuScroller from "@/components/MenuScrolller";
import DropDown from "@/components/DropDown";

export default function Menu() {


  const breakfast = [
    "Aalu chana",
    "CornFlakes(milk)",
    "Tea",
    "Bread",
    "Omelette",
    "Poha",
    "Idli",
    "Dosa",
    "Idli",
    "Dosa",
  ];


  const lunch = [
    "Aalu chana",
    "CornFlakes(milk)",
    "Tea",
    "Bread",
    "Omelette",
    "Poha",
    "Idli",
    "Dosa",
    "Idli",
    "Dosa",
  ];
  const dinner = [
    "Aalu chana",
    "CornFlakes(milk)",
    "Tea",
    "Bread",
    "Omelette",
    "Poha",
    "Idli",
    "Dosa",
    "Idli",
    "Dosa",
  ];


  return (
    <View className="w-full bg-white h-full justify-center items-center">
      
      <View className=" my-8 z-10"> 

        <DropDown/>
      </View>



      <View className=" h-1/4 w-[94%] flex items-center">
        <Text className="text-blue-500 font-semibold font-poppins-medium text-lg">Breakfast</Text>

        <View className="flex flex-col h-full w-full">
          <MenuScroller list={breakfast} />
        </View>
      </View>

      <View className=" h-1/4 w-[94%] flex items-center">
        <Text className="text-blue-500 font-semibold font-poppins-medium text-lg">Lunch</Text>

        <View className="flex flex-col h-full w-full">
          <MenuScroller list={lunch} />
        </View>
      </View>

      <View className=" h-1/4 w-[94%] flex items-center">
        <Text className="text-blue-500 font-semibold font-poppins-medium text-lg">Dinner</Text>

        <View className="flex flex-col h-full w-full">
          <MenuScroller list={dinner} />
        </View>
      </View>


      

    </View>
  );
}
