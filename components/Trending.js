import { View, Text, Image } from "react-native"
import React from "react"
import {
    PlayIcon,
    PlusIcon,
} from "react-native-heroicons/solid"

const Trending = () => {
    return (
        <View className="flex space-y-3 bg-black text-white mx-auto">
            <View>
                <Image
                    source={{
                        uri: "https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLARazyJycaayer_rgOlUTRQVKk5JA",
                    }}
                    className="w-[90vw] object-contain h-[40vh] bg-gray-300 "
                />
            </View>
            <View className="flex justify-center flex-row items-center gap-x-4 gap-y-2">
                <Text className="text-white w-fit">Psychological</Text>
                <Text className="text-white w-fit">Suspenseful</Text>
                <Text className="text-white w-fit">Teen Scream</Text>
            </View>
            <View className="flex items-center justify-center gap-x-4 gap-y-2 flex-row">
                <View className="flex flex-row items-center justify-center bg-white px-8 rounded-lg py-2">
                    <PlayIcon color={'black'} />
                    <Text className="text-black font-bold">Play</Text>
                </View>
                <View className="flex flex-row items-center justify-center bg-[#333335] px-8 rounded-lg py-2">
                    <PlusIcon color={'white'} />
                    <Text className="text-white font-bold">My List</Text>
                </View>
            </View>
            <View className="bg-slate-800 h-2" />
        </View>
    )
}

export default Trending
