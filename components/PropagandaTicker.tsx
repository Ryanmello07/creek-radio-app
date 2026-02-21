import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, LayoutChangeEvent } from 'react-native';
import { Colors } from '@/constants/Colors';

const MESSAGES = [
  'REMINDER: Freedom is not free — it is earned through superior firepower.',
  'DEFICIT SPENDING REACHES RECORD HIGHS; President assures public E-710 will lower cost of living.',
  'MANAGED DEMOCRACY WORKS — Trust your elected officials.',
  'HOMELESSNESS ERADICATED as RE-EDUCATION FACILITIES EXPANDED.',
  'REPORT TREASONOUS THOUGHTS TO YOUR NEAREST DEMOCRACY OFFICER.',
  'MINISTRY OF TRUTH SAYS FILES ARE ON THEIR DESK; CONFIRMS NO FILES EXIST.',
  'SUPER EARTH NEEDS YOU — Enlist today!',
  'C-01 FORMS FILED AT HISTORIC LOWS; Ministry of Humanity insists everything is fine.',
  'BUG SYMPATHIZERS WILL BE RE-EDUCATED.',
  'PRESIDENT BOAST STROHHMAN NEWS RATINGS are a result of his leadership.',
  'FREEDOM. JUSTICE. DEMOCRACY. EXPLOSIONS.',
  'ELECTIONS POSTPONED AS FEARS OF DISSIDENT INTERFERENCE ESCALATE.',
  'THE AUTOMATONS FEAR YOUR PATRIOTISM.',
  'LAWMAKERS LOWER AGE REQUIREMENT FOR LETHAL ARMS; preschools begin gun safety education.',
  'EVERY CITIZEN IS A SOLDIER — EVERY SOLDIER IS A HERO.',
  'MINISTRY OF PROSPERITY URGES CITIZENS TO SPEND SUPER CREDITS; reminds Citizens SAVING IS UNDEMOCRATIC.',
  'MANAGED DEMOCRACY IS NON-NEGOTIABLE.',
  'MINISTRY OF SCIENCE REJECTS DISSIDENT CONSPIRACIES alleging Terminid Engineering.',
  'LIBERTY DAY IS EVERY DAY ON SUPER EARTH.',
  'MINISTRY OF DEFENSE CLAIMS FINANCIAL AUDIT WOULD BE INEFFICIENT.',
  'DO YOUR PART — SPREAD MANAGED DEMOCRACY.',
  'MINISTRY OF EXPANSION PROMOTES MEGACITY DEVELOPMENT on magma worlds.',
  'THE MINISTRY OF DEFENSE REMINDS YOU: DYING FOR SUPER EARTH IS A PRIVILEGE.',
  'MINISTRY OF UNITY CLAIMS fatal shootings indicate IMPROVED CRIME SOLVING.',
  'TRAITORS WILL BE LAUNCHED INTO THE SUN.',
  'MISSING LAWMAKER LOCATED IN RETIREMENT HOME; retirement age raised to 100.',
  'YOUR TAX CREDITS AT WORK — FUNDING FREEDOM SINCE 2084.',
  'SLEEP WELL, CITIZEN — THE HELLDIVERS ARE WATCHING.',
  'CREEK RADIO COMMUNITY: DISCORD.GG/CREEKRADIO',
];

const SEPARATOR = '  \u2022  ';
const TICKER_TEXT = MESSAGES.join(SEPARATOR);

export function PropagandaTicker() {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  const onTextLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    if (width > 0 && textWidth === 0) {
      setTextWidth(width);
    }
  };

  useEffect(() => {
    if (textWidth === 0) return;

    scrollAnim.setValue(0);

    const duration = textWidth * 25;

    const loop = Animated.loop(
      Animated.timing(scrollAnim, {
        toValue: -textWidth,
        duration,
        useNativeDriver: true,
        isInteraction: false,
      })
    );

    animationRef.current = loop;
    loop.start();

    return () => {
      loop.stop();
    };
  }, [textWidth, scrollAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.scrollContent,
            { transform: [{ translateX: scrollAnim }] },
          ]}
        >
          <Text style={styles.tickerText} onLayout={onTextLayout}>
            {TICKER_TEXT + SEPARATOR}
          </Text>
          <Text style={styles.tickerText}>{TICKER_TEXT + SEPARATOR}</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDim,
    overflow: 'hidden',
  },
  track: {
    paddingVertical: 6,
    overflow: 'hidden',
  },
  scrollContent: {
    flexDirection: 'row',
  },
  tickerText: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '500',
  },
});
