import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import './app.scss'

function App() {
  return (
    <React.Suspense fallback={<span className="page page-loading"></span>}>
      <Root>
        <Routes />
      </Root>
    </React.Suspense>
  )
}

export default App
