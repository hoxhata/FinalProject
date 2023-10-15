import Nav from 'react-bootstrap/Nav' 
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"

function NavBar() {
  return (
    <div >
    <Navbar bg="dark">
      <Navbar.Brand href="#home" style={{color:"white"}}>React-Bootstrap</Navbar.Brand> 
        <Nav className>
        <Nav.Link href="#link1" style={{color:"white"}}>Primary Link</Nav.Link> 
        <Nav.Link href="#link2" style={{color:"white"}}>Secondary Link</Nav.Link>
        </Nav> 
      </Navbar>
  </div>  )
}
export default NavBar