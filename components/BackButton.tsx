import { useThemeColor } from '@/hooks/useThemedColors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, type PressableProps } from 'react-native';

export type BackButtonProps = PressableProps & {
    size?: number,
    dark?: string,
    light?: string
}

export function BackButton({ size, dark, light, ...rest }: BackButtonProps) {
    const color = '#0066F6'

    return (
        <Pressable {...rest}>
            <AntDesign name="leftcircleo" size={size || 30} color={ color } />
        </Pressable>
    )
}
