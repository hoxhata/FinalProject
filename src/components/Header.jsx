// import NavBar from "../navigation/NavBar"  ketu ka nje problem
import { NavLink } from "react-router-dom"
import Search from "./Search"
import SearchResultsList from "./SearchResultsList"
import { useState } from "react"

function Header() {
  const [results, setResults] = useState ([])


  return (
    <>
    
   <Search setResults={setResults} />
   <SearchResultsList results={results} />


      <div className="title">
        
<div className="topnav">
  <NavLink className="active" to="/">Home</NavLink>
  <NavLink to="/news">News</NavLink>
  <NavLink to="/ourplatform">Our Platform</NavLink>
  <NavLink to="/whoweare">Who We Are</NavLink>
  <NavLink to="/gofund">Go Fund</NavLink>
</div>
</div>
<h1 className="myblog">ATR Foundation</h1>
<div className="app">

    </div>
    
    </>

      )
}
export default Header