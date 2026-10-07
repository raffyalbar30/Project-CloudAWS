import { Routes, Route } from "react-router-dom";
import Routers from './Routers';
import './App.css'
import Shoppages from "./pages/Shop";
import AwsAccount from "./pages/AwsAccount";
import About from "./components/About";
import CloudAccount from "./pages/CloudAccount";
import HezernetAccount from "./pages/HetzerneetAccount";
import Allproducts from "./pages/Allproducts";

function App() {

  return (
     <Routes>
        <Route path='/shop' element={<Routers Children={<Shoppages/>}/>}></Route>
        <Route path='/about' element={<Routers Children={<About/>}/>}></Route>
        <Route path='/Allproducts' element={<Routers Children={<Allproducts/>}/>}></Route> 
        <Route path='/product/buy-aws-account' element={<Routers Children={<AwsAccount/>}/>}></Route>
        <Route path='/product/buy-cloud-account' element={<Routers Children={<CloudAccount/>}/>}></Route>
        <Route path='/product/buy-hetzernet-account' element={<Routers Children={<HezernetAccount/>}/>}></Route>
     </Routes>
  )
}

export default App
