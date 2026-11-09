// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/navbar'
import './Components/navbar.css'
import Cards from './Components/cards'
import './Components/cards.css'
import Content from './Components/content'
import './Components/content.css'
import Show from './Components/show'
import {Route,Routes} from 'react-router-dom'
import Footer from './Components/footer'
import Fetch from './Components/Fetch'
function App() 
{
  return <>
  <Routes>
  <Route path='/show' element={<Show/>}></Route>
  <Route path='/fetch' element={<Fetch/>}></Route>
  <Route path='/content' element={<Content/>}></Route>
  <Route path='/' element={
  <Fetch/>}></Route>
  </Routes>
  {/* <Content/> */}
  </>

}
export default App
