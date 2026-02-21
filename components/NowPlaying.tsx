import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Signal, Radio } from 'lucide-react-native';
import WebView from 'react-native-webview';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from './TacticalPanel';

const LIVE365_EMBED_URL =
  'https://live365.com/embeds/v1/player/a50373?s=sm&m=dark&c=mp3';

export function NowPlaying() {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <TacticalPanel style={styles.container}>
      <View style={styles.header}>
        <Signal size={16} color={Colors.green} />
        <Text style={styles.headerText}>LIVE BROADCAST FEED</Text>
      </View>

      <TouchableOpacity
        onPress={() => setShowEmbed(!showEmbed)}
        style={styles.toggleButton}
        activeOpacity={0.7}
      >
        <Radio size={16} color={showEmbed ? Colors.magenta : Colors.textDim} />
        <Text
          style={[
            styles.toggleText,
            showEmbed && styles.toggleTextActive,
          ]}
        >
          {showEmbed ? 'HIDE TRACK INFO' : 'SHOW TRACK INFO'}
        </Text>
      </TouchableOpacity>

      {showEmbed && (
        <View style={styles.embedWrapper}>
          <View style={styles.cornerTL} />
          <View style={styles.cornerTR} />
          <View style={styles.cornerBL} />
          <View style={styles.cornerBR} />

          {Platform.OS === 'web' ? (
            <iframe
              width={300}
              height={614}
              frameBorder={0}
              src={LIVE365_EMBED_URL}
              title="Creek Radio Live365 Player"
              style={{ border: `1px solid ${Colors.borderDim}`, maxWidth: '100%' }}
              allow="autoplay"
            />
          ) : (
            <WebView
              source={{ uri: LIVE365_EMBED_URL }}
              style={styles.webview}
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction={false}
              javaScriptEnabled
              scrollEnabled={false}
            />
          )}
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          POWERED BY LIVE365 // SUPER EARTH BROADCASTING
        </Text>
      </View>
    </TacticalPanel>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 10,
    color: Colors.green,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.borderDim,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  toggleText: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  toggleTextActive: {
    color: Colors.magenta,
  },
  embedWrapper: {
    alignSelf: 'center',
    width: 302,
    height: 616,
    borderWidth: 1,
    borderColor: Colors.borderDim,
    marginBottom: 16,
    position: 'relative',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  cornerTL: {
    position: 'absolute',
    top: -4,
    left: -4,
    width: 12,
    height: 12,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.magenta,
    zIndex: 1,
  },
  cornerTR: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.magenta,
    zIndex: 1,
  },
  cornerBL: {
    position: 'absolute',
    bottom: -4,
    left: -4,
    width: 12,
    height: 12,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.magenta,
    zIndex: 1,
  },
  cornerBR: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 12,
    height: 12,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.magenta,
    zIndex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderDim,
    paddingTop: 12,
  },
  footerText: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
