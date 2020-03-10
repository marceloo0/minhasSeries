import React, { useState} from 'react'
import { 
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler
   } from 'reactstrap'
  import { Link } from 'react-router-dom'

  const Header = () =>{
    const [open, setOpen] = useState(false)
    const toggle = () =>{
      setOpen(!open)
    }
  return(
    <Navbar color='light' light expand='md'>
        <div className='container'>
            <NavbarBrand tag={Link} to='/'>Minhas Series</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink tag={Link} to='/Generos'>Generos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to='/Series'>Series</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
      </div>
    </Navbar>
  )
  }

  export default Header