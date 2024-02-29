import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeIcon, VideoCameraIcon, FaceSmileIcon } from 'react-native-heroicons/solid'
import React from "react"
import HomePage from "./screens/HomePage"
import VideoPage from "./screens/VideoPage"
import { AppProvider } from "./context/Context"
const App = () => {
  const Tab = createBottomTabNavigator()

  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen options={{
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
          }} name="Home" component={HomePage} />
          <Tab.Screen options={{
            tabBarIcon: ({ color, size }) => (
              <VideoCameraIcon color={color} size={size} />
            ),
          }} name="New & Hot" component={VideoPage} />
          <Tab.Screen options={{
            tabBarIcon: ({ color, size }) => (
              <FaceSmileIcon color={color} size={size} />
            ),
          }} name="My Netflix" component={HomePage} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  )
}

export default App