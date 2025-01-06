import { Colors, ColorsPropsType } from "@/constants/Colors";
import { useColorScheme } from "react-native";



export function useThemeColor(
    props: { light?: string, dark?: string }, 
    colorPropName: ColorsPropsType
) {
    const theme = useColorScheme() ?? 'light'; // user theme or by default light theme.
    const colorFromProps = props[theme];  // manually passed color based on the user theme.

    if(colorFromProps) {
        return colorFromProps // If a color was manually passed it will return it for that theme.
    } else {
        return Colors[theme][colorPropName] // else a color for that prop will be selected from the colors object.
    }
}