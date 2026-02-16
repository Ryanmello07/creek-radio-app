export interface StreamMetadata {
  title: string;
  artist: string;
  song: string;
  bitrate: string;
  listeners: number;
  serverStatus: 'online' | 'offline';
}

const STATUS_URL = 'https://creekradio.nohost.me/status-json.xsl';

class IcecastMetadataService {
  private pollInterval: NodeJS.Timeout | null = null;
  private readonly POLL_INTERVAL_MS = 10000;

  async fetchMetadata(): Promise<StreamMetadata> {
    try {
      const response = await fetch(STATUS_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return this.parseJsonMetadata(await response.json());
    } catch (error) {
      console.error('Failed to fetch stream metadata:', error);
      return this.getDefaultMetadata();
    }
  }

  private parseJsonMetadata(data: any): StreamMetadata {
    const source = data.icestats?.source;

    if (!source) {
      return this.getDefaultMetadata();
    }

    const sourceData = Array.isArray(source) ? source[0] : source;
    const title = sourceData.title || sourceData.server_name || '';

    let artist = 'Creek Radio';
    let song = 'Broadcasting Democracy';

    if (title && title !== 'Unspecified name' && title !== '') {
      [artist, song] = this.splitTitleArtist(title);
    }

    const serverType = sourceData.server_type || '';
    let bitrate = 'Unknown';

    if (sourceData.bitrate) {
      bitrate = `${sourceData.bitrate} kbps`;
    } else if (serverType.includes('audio/mpeg')) {
      bitrate = '128 kbps';
    }

    return {
      title: title || 'Live Broadcast',
      artist,
      song,
      bitrate,
      listeners: sourceData.listeners || 0,
      serverStatus: 'online',
    };
  }

  private splitTitleArtist(title: string): [string, string] {
    const separators = [' - ', ' – ', ' — ', ': '];

    for (const separator of separators) {
      if (title.includes(separator)) {
        const [artist, ...songParts] = title.split(separator);
        return [artist.trim(), songParts.join(separator).trim()];
      }
    }

    return ['Unknown Artist', title];
  }

  private getDefaultMetadata(): StreamMetadata {
    return {
      title: 'Creek Radio',
      artist: 'Super Earth Broadcasting',
      song: 'Connecting...',
      bitrate: 'Unknown',
      listeners: 0,
      serverStatus: 'offline',
    };
  }

  startPolling(callback: (metadata: StreamMetadata) => void): void {
    this.fetchMetadata().then(callback);

    this.pollInterval = setInterval(async () => {
      const metadata = await this.fetchMetadata();
      callback(metadata);
    }, this.POLL_INTERVAL_MS);
  }

  stopPolling(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
    }
  }
}

export const icecastService = new IcecastMetadataService();
