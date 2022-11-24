import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar} from './components'
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='main'>
        main
      </div>
      <div className='footer'>
        footer
      </div>
    </div>
  )
}

export default App
