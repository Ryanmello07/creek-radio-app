import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ReactNode } from 'react';

interface TacticalPanelProps {
  children: ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'red';
}

export function TacticalPanel({ children, style, variant = 'default' }: TacticalPanelProps) {
  const borderColor = variant === 'red' ? Colors.red : Colors.border;

  return (
    <View style={[styles.outer, { borderColor }, style]}>
      <View style={[styles.inner, { borderColor: variant === 'red' ? Colors.darkRed : Colors.borderDim }]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderWidth: 2,
    backgroundColor: Colors.bgPanel,
    padding: 2,
  },
  inner: {
    borderWidth: 1,
    backgroundColor: Colors.bgPanel,
    padding: 12,
  },
});
