import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Home, Database, Heart, Skull } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { PropagandaTicker } from '@/components/PropagandaTicker';

export default function TabLayout() {
  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.tickerSafeArea}>
        <PropagandaTicker />
      </SafeAreaView>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.magenta,
          tabBarInactiveTintColor: Colors.textDim,
          tabBarStyle: {
            backgroundColor: Colors.bgPanel,
            borderTopColor: Colors.border,
            borderTopWidth: 2,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => (
              <Home size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="archive"
          options={{
            title: 'Archive',
            tabBarIcon: ({ size, color }) => (
              <Database size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="donations"
          options={{
            title: 'Donations',
            tabBarIcon: ({ size, color }) => (
              <Heart size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="dissidents"
          options={{
            title: 'Dissidents',
            tabBarIcon: ({ size, color }) => (
              <Skull size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  tickerSafeArea: {
    backgroundColor: Colors.bg,
  },
});
