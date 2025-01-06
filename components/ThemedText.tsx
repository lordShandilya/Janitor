import { useThemeColor } from "@/hooks/useThemedColors";
import { Text, type TextProps, StyleSheet } from "react-native";



export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof themedTypeStyle;
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <Text
      style={[
        { color },
          themedTypeStyle[type],
        style
      ]}
      {...rest}
    />
  )
}


const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 34,
    fontWeight: 'semibold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});

const themedTypeStyle = {
  default : styles.default,
  title : styles.title,
    defaultSemiBold : styles.defaultSemiBold,
    subtitle : styles.subtitle,
    link: styles.link,
}
