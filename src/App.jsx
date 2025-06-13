import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/login'
import HomePage from './pages/home'
import SignupPage from './pages/signup'
import Header from './components/header'
import NotFound from './pages/error'
import AdminPage from './pages/admin_page'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <BrowserRouter>
    <Toaster position='top-center'></Toaster>
    <Header></Header>
      <Routes path = "/*">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/adminpage/*" element={<AdminPage />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
