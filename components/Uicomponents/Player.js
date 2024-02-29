import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { useState } from 'react'
function HLSPlayer({ uri }) {
    const [inFullscreen, setInFullscreen] = useState(false)
    return (
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: ResizeMode.COVER,
                source: {
                    uri: uri || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },
            }}
            fullscreen={{
                inFullscreen,
                enterFullscreen: () => setInFullscreen(true),
                exitFullscreen: () => setInFullscreen(false),
            }}
            style={{
                height: 240
            }}
        />
    )
}

export default HLSPlayer