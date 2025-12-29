import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './App.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {Toaster} from 'react-hot-toast'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <QueryClientProvider
  client={queryClient}
  >
      <App 
      />
  </QueryClientProvider>
   <Toaster 
    position='top-center'
    gutter ={12}
    containerStyle={{margin : '8px'}}
    toastOptions={{
        success : {
            duration : 3000
        },
        Error : {
            duration : 5000
        },
        style : {
            fontSize : '16px',
            backgroundColor :'#fff',
            color : '#000',
            maxWidth : '50rem',
            padding : '1.6rem 2.4rem'

        }
    }
    }

    />
  </StrictMode>,
)
