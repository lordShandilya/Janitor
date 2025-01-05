import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react"
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Alert, Button, Pressable, StyleSheet, type ViewProps } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeColor } from "@/hooks/useThemedColors";
import * as ImagePicker from "expo-image-picker";

export default function CamScanner({ style }: ViewProps) {
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<CameraType>('back');
    const [torch, setTorch] = useState<boolean>(false);
    const iconColor = useThemeColor({light: undefined, dark: undefined}, 'icon');


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

    useEffect(() => {
        requestPermission();
    },[]);

    if(!permission) {
        return <ThemedView style = {styles.container}>
            <ThemedText>Loading...</ThemedText>
        </ThemedView>
    }

    if(!permission.granted) {
        return (
            <ThemedView style = {styles.container}>
                <ThemedText>
                    We need your permission to access the camera.
                </ThemedText>
                <Button onPress={requestPermission} title="grant permission"/>
            </ThemedView>
        )
    }

    const onQrScan = (result: BarcodeScanningResult) => {
        // TODO
    }

    return (
        <ThemedView 
            style = {[
                style,
                styles.container
            ]}
        >
            
            <CameraView 
                facing={facing}
                style = {styles.camera}
                onBarcodeScanned={onQrScan}
                enableTorch={torch}
            >
                <ThemedView style = {styles.tray}>
                <Pressable onPress={PickImage}>
                    <FontAwesome name="photo" size={20} color={iconColor} />
                </Pressable>
                <Pressable onPress={() => {setTorch(prev => !prev)}}>
                    <MaterialIcons name="electric-bolt" size={24} color={iconColor} />
                </Pressable>
                <Pressable onPress={() => {facing === 'back' ? setFacing('front') : setFacing('back')}}>
                    <Ionicons name="camera-reverse" size={24} color={iconColor} />
                </Pressable>
                </ThemedView>
            </CameraView>
            
        </ThemedView>
    )



}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        width: 330,
        height: 330,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 100
    },
    tray: {
        flexDirection: 'row',
        height: 45,
        width: 300,
        backgroundColor: '#0066F6',
        marginTop: 25,
        borderRadius: 20,
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 65
    },

})