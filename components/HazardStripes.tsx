import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface HazardStripesProps {
  variant?: 'default' | 'red' | 'thin';
  style?: any;
}

export function HazardStripes({ variant = 'default', style }: HazardStripesProps) {
  const color = variant === 'red' ? Colors.red : Colors.magenta;
  const height = variant === 'thin' ? 6 : 12;
  const stripeWidth = variant === 'thin' ? 6 : 10;

  return (
    <View style={[styles.wrapper, { height }, style]}>
      <View style={[styles.stripesRow, { top: -height, bottom: -height, left: -40, right: -40 }]}>
        {[...Array(80)].map((_, i) => (
          <View
            key={i}
            style={{
              backgroundColor: i % 2 === 0 ? color : '#000',
              width: stripeWidth,
              height: height * 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    width: '100%',
  },
  stripesRow: {
    flexDirection: 'row',
    position: 'absolute',
    transform: [{ skewX: '-45deg' }],
  },
});
