import { Colors, ColorsPropsType } from "@/constants/Colors";
import { useColorScheme } from "react-native";



export function useThemeColor(
    props: { light?: string, dark?: string },
    colorPropName: ColorsPropsType
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];

    if(colorFromProps) {
        return colorFromProps
    } else {
        return Colors[theme][colorPropName]
    }
}