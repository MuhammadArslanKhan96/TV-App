import React from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import Posts from './Posts'

function Category({ title, items, navigation }) {

  return (
    <View className="py-10">
      <View className="flex flex-row px-4 justify-between items-center">
        <Text className="text-white font-bold text-lg">{title}</Text>
        {items.length > 10 && (
          <View className='flex flex-row items-center'>
            <Text className="text-white font-medium text-base">My List</Text>
            <ChevronRightIcon color={'white'} />
          </View>
        )}
      </View>
      <View className="h-5" />
      <ScrollView className="flex-row px-4 gap-2" horizontal={true}>
        {items.slice(0, 10).map((item) => (
          <View key={item.line}>
            <Posts navigation={navigation} item={item} type={title.replace(' & ', ';').split(';')} imageURL={item.tvg.logo} title={item.name} />
            <View className='w-[10px]'></View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Category