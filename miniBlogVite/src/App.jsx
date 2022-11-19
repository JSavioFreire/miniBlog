import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { StyledGlobal,theme } from './styledGlobal/StyledGlobal'
import { ThemeProvider } from 'styled-components'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/login/Register'

import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <StyledGlobal/>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
