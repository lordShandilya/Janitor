import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function MenuScroller({list}:{list:Array<string>}) {
  const offsetValue = useRef(0);
  const menuWidth = useRef(0); 
  const screenWidth = useRef(0); 

  const scrollViewRef = useRef<ScrollView>(null);

  const [isAtStart, setIsAtStart] = useState(true); 
  const [isAtEnd, setIsAtEnd] = useState(false); 


  // Scroll horizontally by offset
  const scrollHorizontally = (offset: number) => {
    const nextOffset = offsetValue.current + offset;

    // Prevent scrolling beyond boundaries
    if (nextOffset <= 0) {
      offsetValue.current = 0;
      setIsAtStart(true);
      setIsAtEnd(false);
    } else if (nextOffset + screenWidth.current >= menuWidth.current) {
      offsetValue.current = menuWidth.current - screenWidth.current;
      setIsAtStart(false);
      setIsAtEnd(true);
    } else {
      offsetValue.current = nextOffset;
      setIsAtStart(false);
      setIsAtEnd(false);
    }

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: offsetValue.current,
        animated: true,
      });
    }
  };

  // Handle content size change
  const handleContentSizeChange = (contentWidth: number) => {
    menuWidth.current = contentWidth;
    updateButtonStates();
  };

  // Handle layout changes to get screen width
  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    screenWidth.current = width;
    updateButtonStates();
  };

  // Update button states based on scroll position
  const updateButtonStates = () => {
    if (menuWidth.current <= screenWidth.current) {
      setIsAtStart(true);
      setIsAtEnd(true);
    } else if (offsetValue.current <= 0) {
      setIsAtStart(true);
      setIsAtEnd(false);
    } else if (offsetValue.current + screenWidth.current >= menuWidth.current) {
      setIsAtStart(false);
      setIsAtEnd(true);
    } else {
      setIsAtStart(false);
      setIsAtEnd(false);
    }
  };

  return (

<View className="w-full h-3/4 flex flex-row items-center">
        {/* Previous Button */}
        <TouchableOpacity
          onPress={() => scrollHorizontally(-80)}
          className={`p-2 rounded-full ml-2 h-10 flex justify-center ${
            isAtStart ? "bg-gray-400 invisible" : "bg-blue-500"
          }`}
          disabled={isAtStart}
        >
          <FontAwesome6 name="chevron-left" size={20} color="white" />
        </TouchableOpacity>

        {/* Scrollable Menu */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          onContentSizeChange={handleContentSizeChange}
          onLayout={handleLayout}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          className="w-full  flex flex-row"
        >
          {list.map((item, index) => (
            <View
              key={index}
              className="bg-[#D9D9D9] border border-[#D9D9D9] rounded-md w-28 h-24 justify-center mx-2 shadow-md"
            >
              <View className="bg-white flex grow justify-center items-center">
                <FontAwesome6 name="bowl-food" size={20} color="black" />
              </View>
              <Text className="font-poppins-bold font-semibold text-center m-1">
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => scrollHorizontally(80)}
          className={`p-2 rounded-full ml-2 h-10 flex justify-center ${
            isAtEnd ? "bg-gray-400 invisible" : "bg-blue-500"
          }`}
          disabled={isAtEnd}
        >
          <FontAwesome6 name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
      </View>


  );
}
