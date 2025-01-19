import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
<<<<<<< HEAD
// import { StyleSheet  } from "react-native"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import DropDown from "@/components/DropDown"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useRef } from "react";

export default function Menu() {


    const offsetValue = useRef<number>(0);
    const menuWidth = useRef<number>(0);
    const screenWidth = useRef<number>(0);// delete

    const scrollComponent = useRef<View>(null)
    const scrollViewRef = useRef<ScrollView>(null);

    const breakfast = ['Aalu chana', 'CornFlakes(milk)', 'Tea', 'Aalu chana', 'CornFlakes(milk)', 'Tea'];


  const scrollHorizontally:(offset:number)=>void = (offset:number) => {
    let screenWidth = 0;// temporary prurpose

    if(scrollViewRef.current){
        // scrollViewRef.current.measure((x, y, width)=>{
        //     screenWidth = width;
        // })

        
    }
    offsetValue.current += offset;
    console.log(offsetValue.current + screenWidth,  menuWidth.current );
    
    if(offsetValue.current + screenWidth >= menuWidth.current ){
        offsetValue.current -= offset;
        return;
    }

    if (scrollViewRef.current) {
      scrollViewRef.current?.scrollTo({
        x: offsetValue.current,
        animated: true,
      });
    }
  };

  
  /*
    @hadleContentSizeChange
    -> contentWidth is in pixels

    Description : this function is to manage the scroll on the basis of the screenWidth of the user's gadget, will apply only once
  */

  const handleContentSizeChange = (contentWidth:number)=>{
    // const screenWidth = window.outerWidth;
    const screenWidth = 320;
    menuWidth.current = contentWidth;
    
    // console.log('parent width: ',screenWidth)

    if(screenWidth < contentWidth){
        // show the buttons and all as they will overlap
    }
  }


  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setScreenWidth(width); // Store screen width
  };

  useEffect(()=>{

    // calculating the width once the component is mounted
    if (scrollViewRef.current) {
        scrollViewRef.current.measure((x, y, width) => {
          screenWidth.current = width;
        });
      }
  },[])

    return (
        <View className={"w-full bg-white  h-full flex justify-center items-center"}>
            {/* <ThemedText className="bg-red-400">Jai Mata Di</ThemedText> */}
            <View className={"w-1/2 h-1/4"}>
                {/* select options Menu */}
                <DropDown />
            </View>


            <View>
            <ScrollView
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={handleContentSizeChange}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        className={`w-[320px] overflow-scroll flex flex-row  bg-cyan-500 h-80`}
      >

                {
                    breakfast.map((e,id)=>{
                        return(
                            <View className="bg-[#D9D9D9] border border-[#D9D9D9] rounded-md w-32 h-28  justify-center mx-2 shadow-md" key={id}>
                            <View className="bg-white flex grow justify-center items-center">
                                <FontAwesome6 name="bowl-food" size={24} color="black" />
                            </View>
                            <Text className=" font-poppins-bold font-semibold text-center m-1">{e}</Text>
                        </View>
        
                        )
                    })
                }
            </ScrollView>

            </View>

            <TouchableOpacity
        onPress={() => scrollHorizontally(80)} // Adjust the scroll offset as needed
        className="bg-blue-500 p-3 rounded-full ml-2"
      >
        <FontAwesome6 name="chevron-right" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => scrollHorizontally(-80)} // Adjust the scroll offset as needed
        className="bg-blue-500 p-3 rounded-full ml-2"
      >
        <FontAwesome6 name="chevron-left" size={20} color="white" />
      </TouchableOpacity>

        </View>
=======
import { StyleSheet, View } from "react-native"

export default function Menu() {
    return ( 
        <ThemedView style={styles.Container}>
            <ThemedText type="default">Under development...</ThemedText>
        </ThemedView>
>>>>>>> 6981512ef95c405af2d6c2e3c508ecbe0b38ee6f
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD

    container: {
        width: 1000,
        height: 1000,
        backgroundColor: 'white'
    },

=======
    Container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
>>>>>>> 6981512ef95c405af2d6c2e3c508ecbe0b38ee6f
})