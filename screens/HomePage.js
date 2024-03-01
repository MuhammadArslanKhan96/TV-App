import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Trending from "../components/Trending"
import { ScrollView } from "react-native"
import Category from "../components/Uicomponents/Category"
import { getList } from '../constants/listJson'


const groupBy = (arr, key) => arr.reduce((acc, obj) => {
  const groupKey = obj[key]['title']
  acc[groupKey] = acc[groupKey] || []
  acc[groupKey].push(obj)
  return acc
}, {})

const HomePage = ({ navigation }) => {
  const [result, setResult] = useState({})

  useEffect(() => {
    const items = getList()
    const result = groupBy(items, 'group')
    setResult((result))
  }, [])
  return (
    <ScrollView className="overflow-auto bg-[#202020]">
      <Navbar />
      <Trending />
      {Object.keys(result).map(function (key) {
        return (
          <Category navigation={navigation} key={key} items={result[key]} title={key.replace(';', ' & ')} />
        )
      })}
    </ScrollView>
  )
}

export default HomePage
