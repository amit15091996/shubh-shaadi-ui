import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ApiContextProvider from './contexts/ApiContextProvider.jsx'
import ServiceRegister from './service/ServiceRegister.js'
import { CookiesProvider } from 'react-cookie'
createRoot(document.getElementById('root')).render(
    <ApiContextProvider value={ServiceRegister()}>
        <CookiesProvider defaultSetOptions={{path:"/"}}>
            <App />
        </CookiesProvider>
    </ApiContextProvider>
)
