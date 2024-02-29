import { createContext, useContext, useState } from "react"

export const useAppContext = () => useContext(AppContext)

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [selectedVideo, setSelectedVideo] = useState({})
    return (
        <AppContext.Provider value={{ selectedVideo, setSelectedVideo }}>
            {children}
        </AppContext.Provider>
    )
}