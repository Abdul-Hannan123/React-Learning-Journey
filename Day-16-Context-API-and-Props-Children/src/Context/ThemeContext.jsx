import React, { createContext } from 'react'


export const storyData = createContext()

const ThemeContext = (props) => {
    return (
        <div>
            <storyData.Provider value={"Ali"}>
                {props.children}
            </storyData.Provider>

        </div>
    )
}

export default ThemeContext
