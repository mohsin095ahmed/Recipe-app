import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "../Page/Home/Home.jsx"
import Categorise from "../Page/About/Catogories.jsx"
import Recipe from "../Page/Reciep/Recipe.jsx"
import Search from "../Page/Search/Search.jsx"
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/categorise/:name" element={<Categorise/>}/>
       <Route path="/Recipe/:id" element={<Recipe/>}/>
       <Route path="/SearchMeal/:search" element={<Search></Search>}/>
     </Routes> 
    </BrowserRouter>
   
  )
}

export default AppRouter