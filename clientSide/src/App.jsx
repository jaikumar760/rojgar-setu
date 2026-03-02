import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Book from './Book.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Signup />} /> */}
        <Route path="/" element={<Login />} /> 
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/book" element={<Book />} />       {/* new booking route */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App








