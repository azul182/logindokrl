import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Registro from "./pages/registro"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App