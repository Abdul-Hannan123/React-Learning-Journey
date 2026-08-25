import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './Context/ThemeContext.jsx'
import PageTheme from './Context/PageTheme.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeContext>
        <PageTheme>
            <App />
        </PageTheme>
    </ThemeContext>
)
