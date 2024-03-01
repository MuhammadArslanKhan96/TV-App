import React, { useEffect, useState } from "react"
import VideoPlayer from 'expo-video-player'

function HLSPlayer({ uri }) {
    const [useNativeControls, setUseNativeControls] = useState(true)
    try {
        useEffect(() => {
            return () => setUseNativeControls(false)
        }, [])


        return (
            <VideoPlayer
                useNativeControls={useNativeControls}
                videoProps={{
                    shouldPlay: true,
                    resizeMode: "cover",
                    source: {
                        uri: uri || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                style={{
                    height: 240
                }}
            />
        )
    } catch (error) {
        // Handle the error
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }
}

export default HLSPlayer