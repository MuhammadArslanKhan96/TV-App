import React from "react"
import { ScrollView, Text, View, Image } from "react-native"
import {
    PlayIcon,
    ArrowDownTrayIcon
} from "react-native-heroicons/solid"
import Player from "../components/Uicomponents/Player"
import { useAppContext } from "../context/Context"

const VideoPage = () => {
    const { selectedVideo } = useAppContext()
    return (
        <ScrollView className="overflow-auto bg-[#202020]">
            <Player uri={selectedVideo?.url || 'http://217.76.58.124:2095/nt3VRpKrmX/Q4NSQtXkMt/704232'} />
            <View className='px-2 my-2 flex-row items-center gap-x-2'>
                <Image
                    source={{
                        uri: selectedVideo?.tvg?.logo || "https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLARazyJycaayer_rgOlUTRQVKk5JA",
                    }}
                    className="w-[35px] object-contain h-[35px] bg-gray-300 "
                />
                <Text className='text-lg font-bold text-white'>{selectedVideo?.name || "#1 in Movies Today"}</Text>
            </View>
            <View className='px-2 gap-y-5'>
                <View className='gap-y-2'>
                    <View className='w-full items-center bg-white rounded-lg flex-row justify-center py-2'>
                        <PlayIcon color={'black'} />
                        <Text className="ml-2 text-black font-bold">Play</Text>
                    </View>
                    <View className='w-full items-center bg-[#4e4e4e] rounded-lg flex-row justify-center py-2'>
                        <ArrowDownTrayIcon color={'white'} />
                        <Text className="ml-2 text-white font-bold">Download</Text>
                    </View>
                </View>
                <Text className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam ea ipsum, earum voluptate id doloribus sint quaerat provident blanditiis! Recusandae voluptates repellat, hic eum corrupti minima quae vel harum!</Text>
                <View>
                    <Text className='text-slate-400'>Cast: Lorem ipsum dolor sit amet!... more</Text>
                    <Text className='text-slate-400'>Director: Tyler Perry</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default VideoPage