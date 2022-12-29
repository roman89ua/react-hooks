import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import UseState from './components/useState'
import UseEffect from './components/useEffect'
import UseRef from './components/useRef'
import UseMemo from './components/useMemo'
import UseCallback from './components/useCallback'
import UseContext from './components/UseContext/UseContext'
import UseReducer from './components/useReducer'
import Navbar from './components/Navbar'
import Clock from './components/Clock'
import UseCustomHook from './components/useCustomHook/UseCustomHook'
import Hoc from './components/HOC'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-3'>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={UseState} path='/useState' />
          <Route component={UseEffect} path='/useEffect' />
          <Route component={UseRef} path='/useRef' />
          <Route component={UseMemo} path='/useMemo' />
          <Route component={UseCallback} path='/useCallback' />
          <Route component={UseContext} path='/useContext' />
          <Route component={UseReducer} path='/useReducer' />
          <Route component={UseCustomHook} path='/useCustomHook' />
          <Route component={Hoc} path='/Hoc' />
        </Switch>
      </div>
      <div className='fixed-bottom text-right text-black-50'>
        <Clock />
      </div>
    </BrowserRouter>
  )
}

export default App
