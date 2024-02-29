import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import {
  MagnifyingGlassIcon,
  RectangleStackIcon
} from "react-native-heroicons/solid"
const Navbar = () => {
  return (
    <SafeAreaView className="flex items-center justify-between flex-row bg-black mt-9 p-5">
      <View className="flex flex-row items-center ">
        <Text className="text-white text-2xl ml-2 ">For Muhammad</Text>
      </View>
      <View className="flex flex-row space-x-6">
        <RectangleStackIcon color="white" className="h-7 w-7" />
        <MagnifyingGlassIcon color="white" className="h-7 w-7" />
      </View>
    </SafeAreaView>
  )
}

export default Navbar
