# Creek Radio - Icecast2 Configuration

## Configuration Steps

To connect your Creek Radio website to your Icecast2 server, you need to update the stream URLs in the `src/App.tsx` file.

### 1. Locate the Configuration

Open `src/App.tsx` and find these lines (around line 10-11):

```typescript
const STREAM_URL = 'http://your-icecast-server:8000/stream';
const STATUS_URL = 'http://your-icecast-server:8000/status-json.xsl';
```

### 2. Update the URLs

Replace the placeholder URLs with your actual Icecast2 server details:

```typescript
const STREAM_URL = 'http://your-domain.com:8000/your-mount-point';
const STATUS_URL = 'http://your-domain.com:8000/status-json.xsl';
```

**Example:**
```typescript
const STREAM_URL = 'http://radio.creekserver.com:8000/creek';
const STATUS_URL = 'http://radio.creekserver.com:8000/status-json.xsl';
```

### 3. Important Notes

#### CORS Configuration
Your Icecast2 server needs to allow cross-origin requests from your website domain. Add this to your `icecast.xml` configuration:

```xml
<http-headers>
    <header name="Access-Control-Allow-Origin" value="*" />
    <header name="Access-Control-Allow-Methods" value="GET, OPTIONS" />
    <header name="Access-Control-Allow-Headers" value="Content-Type" />
</http-headers>
```

#### Status Endpoint
The Creek Radio website supports two status formats:
- **JSON**: `status-json.xsl` (recommended)
- **XML**: `status.xsl` (also supported)

If your Icecast2 server uses a different status endpoint, update the `STATUS_URL` accordingly.

#### Mount Point
Replace `/stream` with your actual mount point name. For example, if your mount point is `/creek`, use:
```
http://your-server:8000/creek
```

### 4. Testing Your Configuration

1. Start your Icecast2 server and ensure it's broadcasting
2. Update the URLs in `src/App.tsx`
3. Run `npm run dev` to test locally
4. Click the PLAY button on the website
5. Verify that:
   - The audio plays
   - The "Now Playing" information updates
   - The listener count increments

### 5. Troubleshooting

**No Audio Playing:**
- Check that your stream URL is correct
- Verify CORS headers are configured on Icecast2
- Ensure your browser allows autoplay (some browsers block it)
- Check browser console for errors

**No Metadata Showing:**
- Verify the status URL is accessible
- Check that your Icecast2 server has metadata enabled
- Ensure the mount point is active and broadcasting

**Listener Count Not Updating:**
- The listener count tracks users on the website, not the Icecast2 listener count
- Make sure Supabase is properly configured
- Check browser console for Supabase connection errors

### 6. Environment Variables (Optional)

For better security and flexibility, you can move these URLs to environment variables:

1. Add to `.env`:
```
VITE_STREAM_URL=http://your-server:8000/stream
VITE_STATUS_URL=http://your-server:8000/status-json.xsl
```

2. Update `src/App.tsx`:
```typescript
const STREAM_URL = import.meta.env.VITE_STREAM_URL || 'http://your-icecast-server:8000/stream';
const STATUS_URL = import.meta.env.VITE_STATUS_URL || 'http://your-icecast-server:8000/status-json.xsl';
```

---

## Additional Features

### Live Listener Tracking
The website automatically tracks active listeners using Supabase:
- When a user clicks PLAY, they're added to the active listeners
- A heartbeat updates every 15 seconds while playing
- Stale connections (30+ seconds without heartbeat) are automatically removed
- The "Forces in Reserve" counter shows real-time listener count

### Metadata Display
The website polls your Icecast2 status endpoint every 10 seconds to display:
- Current song title and artist
- Stream bitrate
- Server status (online/offline)

---

For more help, check the Icecast2 documentation: https://icecast.org/docs/
