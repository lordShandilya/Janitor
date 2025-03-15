import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useCallback,   useEffect, useState } from "react"
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Alert, Button, Pressable, StyleSheet, type ViewProps } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "expo-router";
import { View, Text } from "react-native";
import { horizontalScale, verticalScale } from "@/utils/Scale";
export default function CamScanner({ style }: ViewProps) {

    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<CameraType>('back');
    const [torch, setTorch] = useState<boolean>(false);
    const [icon1Color, setIcon1Color] = useState<string>('#FFFFFF')
    const [icon2Color, setIcon2Color] = useState<string>('#FFFFFF')
    const [icon3Color, setIcon3Color] = useState<string>('#FFFFFF')


    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled) {
            console.log(result);
        } else {
            Alert.alert('Image not selected!');
        }
    }

    useFocusEffect(
        useCallback(() => {
            requestPermission();
        },[])
    );

    if(!permission) {
        return <View style = {styles.container}>
            <Text>Loading...</Text>
        </View>
    }

    if(!permission.granted) {
        return (
            <View style = {styles.container}>
                <Text>
                    We need your permission to access the camera.
                </Text>
                <Button onPress={requestPermission} title="grant permission"/>
            </View>
        )
    }

    const onQrScan = (result: BarcodeScanningResult) => {
        // TODO
    }

    return (
        <View 
            style = {[
                style,
                styles.container
            ]}
        >
            
            <CameraView 
                facing={facing}
                style = {styles.camera}
                barcodeScannerSettings={{
                    barcodeTypes: ['qr']
                }}
                onBarcodeScanned={onQrScan}
                enableTorch={torch}
            >
                <ThemedView style = {styles.tray}>
                <Pressable onPress={PickImage}>
                    <FontAwesome name="photo" size={20} color={icon1Color} />
                </Pressable>
                <Pressable onPress={() => {
                    icon2Color === '#FFFFFF' ? setIcon2Color('yellow') : setIcon2Color('#FFFFFF')
                    setTorch(prev => !prev)
                }}>
                    <MaterialIcons name="electric-bolt" size={24} color={icon2Color} />
                </Pressable>
                <Pressable onPress={() => {
                    facing === 'back' ? setFacing('front') : setFacing('back')
                    icon3Color === '#FFFFFF' ? setIcon3Color('green') : setIcon3Color('#FFFFFF')
                }}>
                    <Ionicons name="camera-reverse" size={24} color={icon3Color} />
                </Pressable>
                </ThemedView>
            </CameraView>
            
        </View>
    )



}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        width: horizontalScale(330),
        height: verticalScale(330),
        borderRadius: 20,
        alignItems: 'center',
        marginTop: verticalScale(100)
    },
    tray: {
        flexDirection: 'row',
        height: verticalScale(45),
        width: horizontalScale(300),
        backgroundColor: '#0066F6',
        marginTop: verticalScale(25),
        borderRadius: 20,
        opacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 65
    },

})