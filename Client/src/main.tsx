import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.scss'

import AppRouter from './components/library/routers/AppRoute.tsx'
AppRouter
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)
