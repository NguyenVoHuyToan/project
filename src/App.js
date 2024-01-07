import React from 'react'

import {Header, Footer, Blog, Features, Possibility,Problem} from './containers'
import {CTA, Navbar, Brand} from './component'

import './App.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <div>
            <Brand />
            <Problem />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    </div>
  )
}

export default App