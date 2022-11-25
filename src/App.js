import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar, Exchanges, Cryptocurrencies, CryptoDetails,News, Homepage} from './components'
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div>

            <Routes>
              <Route exact path='/' element={<Homepage />} />

              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
        
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer' >
        <Typography.Title level ={5} style={{color: 'white', textAlign: 'center'}}>
          CryptoApp designed by femi <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to={'/'}>Home</Link>
          <Link to={'/exchanges'}>Exchanges</Link>
          <Link to={'/news'}>News</Link>

        </Space>
      </div>
      </div>
      
    </div>
  )
}

export default App
