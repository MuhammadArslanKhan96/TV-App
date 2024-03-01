import React, { useEffect, useState } from "react"
import VideoPlayer from 'expo-video-player'
import { Text } from "react-native"

function HLSPlayer({ uri }) {
    const [show, setShow] = useState(false)

    useEffect(() => { setTimeout(() => setShow(true), 7000) }, [])

    if (!show) return <Text>Loading...</Text>
    return (
        <VideoPlayer
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
}

export default HLSPlayer