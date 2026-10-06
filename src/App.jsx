import { Routes, Route } from "react-router-dom";
import Routers from './Routers';
import './App.css'
import Shoppages from "./pages/Shop";
import AwsAccount from "./pages/AwsAccount";
import About from "./components/About";

function App() {

  return (
     <Routes>
        <Route path='/shop' element={<Routers Children={<Shoppages/>}/>}></Route>
        <Route path='/about' element={<Routers Children={<About/>}/>}></Route>
        <Route path='/product/buy-aws-account' element={<Routers Children={<AwsAccount/>}/>}></Route>
     </Routes>
  )
}

export default App
