import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

const baseWidth = 400
const baseHeight = 900

const horizontalScale = (size: number) => (width/baseWidth)*size
const verticalScale = (size: number) => (height/baseHeight)*size

export {
    horizontalScale,
    verticalScale
}