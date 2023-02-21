import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">User List</Nav.Link>
            <Nav.Link as={Link} to="/add">Add User</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation