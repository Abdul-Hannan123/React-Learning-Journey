import React, { createContext, useState } from 'react'

export const themeData = createContext()


const PageTheme = (props) => {
    const [pageTheme, setpageTheme] = useState('light')

    return (
        <div>
            <themeData.Provider value={[pageTheme, setpageTheme]}>

                {props.children}
            </themeData.Provider>
        </div>
    )
}

export default PageTheme
