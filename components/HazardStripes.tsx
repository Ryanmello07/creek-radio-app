import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

interface HazardStripesProps {
  variant?: 'default' | 'red' | 'thin';
  style?: any;
}

export function HazardStripes({ variant = 'default', style }: HazardStripesProps) {
  const { width: screenWidth } = useWindowDimensions();
  const color = variant === 'red' ? Colors.red : Colors.magenta;
  const height = variant === 'thin' ? 6 : 12;
  const stripeWidth = variant === 'thin' ? 6 : 10;

  // Calculate the number of stripes needed based on screen width
  // Account for 45-degree skew by using diagonal distance (width * sqrt(2))
  // Add 50% buffer to ensure full coverage on all screen sizes
  const diagonalDistance = screenWidth * Math.sqrt(2);
  const stripeCount = Math.ceil((diagonalDistance * 1.5) / stripeWidth);

  // Calculate horizontal offset to center the stripes
  const horizontalOffset = (stripeCount * stripeWidth - screenWidth) / 2;

  return (
    <View style={[styles.wrapper, { height }, style]}>
      <View style={[
        styles.stripesRow,
        {
          top: -height,
          bottom: -height,
          left: -horizontalOffset,
          right: -horizontalOffset
        }
      ]}>
        {[...Array(stripeCount)].map((_, i) => (
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
