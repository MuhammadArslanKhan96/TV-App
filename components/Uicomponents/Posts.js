import { View, Text, Image, Pressable } from "react-native"
import React from "react"
import { useAppContext } from "../../context/Context"
const Posts = ({ imageURL, title, type, item }) => {
  const randomDecimal = Math.random()
  const randomNumber = Math.round(randomDecimal)
  const { setSelectedVideo } = useAppContext()
  return (
    <Pressable onPress={() => { setSelectedVideo(item) }} className="flex w-fit max-w-[120px]">
      <View>
        <Image
          source={{
            uri: imageURL || "https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLARazyJycaayer_rgOlUTRQVKk5JA",
          }}
          className="w-[120px] rounded-lg object-contain h-[120px] bg-gray-300 "
        />
      </View>
      <View className='w-fit'>
        <Text className="w-fit text-white">{title || "StoryTeller"}</Text>
        <Text className="w-fit text-slate-700">{type?.[randomNumber] || "Puzzle"}</Text>
      </View>
    </Pressable>
  )
}

export default Posts
