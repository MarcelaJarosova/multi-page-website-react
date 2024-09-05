import Form from './pages/Form'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App