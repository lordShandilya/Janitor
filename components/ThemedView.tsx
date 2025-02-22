import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemedColors';

// This component works the same as themedtext, except it dynamically changes the background color based on the user theme.

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({ style, lightColor, darkColor, className, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} className={className} {...otherProps} />;
}
