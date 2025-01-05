import React from "react";
import { Pressable, type PressableProps } from "react-native";

export type IconComponentProp = {
    name: string,
    size: number,
    color: string
}

export type IconButtonProps = PressableProps & {
    icon ?: React.ComponentType<IconComponentProp>,
    
}

export function IconButton() {

}