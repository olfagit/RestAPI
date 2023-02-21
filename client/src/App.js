import './App.css'
import Navigation from './components/Navigation'
import {Routes,Route} from "react-router-dom"
import AddUser from './components/AddUser'
import ListUser from './components/ListUser'
import UserCard from './components/UserCard'

function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
      <Route path="/" element={<ListUser/>} />
      <Route path="/add" element={<AddUser/>} />
      <Route path="/card" element={<UserCard/>} />
    </Routes>
    </div>
  )
}

export default App
