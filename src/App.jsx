import { Routes, Route } from "react-router-dom";
import Routers from './Routers';
import './App.css'
import Shop from './pages/Shop';

function App() {

  return (
     <Routes>
        <Route path='/shop' element={<Routers Children={<Shop/>}/>}></Route>
     </Routes>
  )
}

export default App
