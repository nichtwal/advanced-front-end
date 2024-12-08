import React, { Suspense, useContext } from 'react'
import './style/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/index.lazy'
import { MainPageAsync } from './pages/MainPage/index.lazy'
import { ThemeContext } from './theme/ThemeContext'
import { useThemeResult } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
 const {theme, themeToggler} = useThemeResult()
  return (
    <div className={classNames('app',{}, [theme])}>
      <button onClick={themeToggler}>theme</button>
        <Link to='/'>Main</Link>
        <br />
        <Link to='/about'>About</Link>
          <Suspense fallback={<div>...loading</div>}>
          <Routes>
          <Route path='/about'  element={<AboutPageAsync />}/>
          <Route path='/'  element={<MainPageAsync />}/>
          </Routes>
          </Suspense>

    </div>
  )
}
