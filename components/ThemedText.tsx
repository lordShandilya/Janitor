import { useThemeColor } from "@/hooks/useThemedColors";
import { Text, type TextProps, StyleSheet } from "react-native";

// This component dynamically selects the text color based on the user default theme.

export type ThemedTextProps = TextProps & {
  lightColor?: string; // You can manually pass a color that you want to be rendered when light theme else pass undefined
  darkColor?: string; // You can manually pass a color that you want to be rendered when dark theme else pass undefined
  className?: string;
  type?: keyof typeof themedTypeStyle; // Choose a type from the given types in themedTypeStyle.
  classNative?: string
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <Text
      className={className}
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
