import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'

import App from './App.tsx'
import { ConfigProvider } from 'antd'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StyleProvider hashPriority='high'>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#FFA500'
              }
            }}
          >
            <App />
          </ConfigProvider>
        </StyleProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
