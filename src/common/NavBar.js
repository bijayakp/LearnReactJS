import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

const MenuBar = () => {
    
    
    return(
        <>
            <div className='row bg-info bg-opacity-50'>
                <div className='col-12'>
                <Navbar expand="lg">
                    <Nav.Link><Link to="/home" className='btn btn-outline-success'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/github" className='btn btn-outline-success'>Github</Link></Nav.Link>
                    <Nav.Link><Link to="/todo" className='btn btn-outline-success'>ToDo</Link></Nav.Link>
                    <Nav.Link><Link to="/fn" className='btn btn-outline-success'>Fn Comp</Link></Nav.Link>
                    <Nav.Link><Link to="/fnapi" className='btn btn-outline-success'>Fn Comp API</Link></Nav.Link>
                    <Nav.Link><Link to="/todofn" className='btn btn-outline-success'>To Do Fn</Link></Nav.Link>
                    <Nav.Link><Link to="/reffn" className='btn btn-outline-success'>Ref Fn</Link></Nav.Link>
                    <Nav.Link><Link to="/refclass" className='btn btn-outline-success'>Ref Class</Link></Nav.Link>
                    <Nav.Link><Link to="/emi" className='btn btn-outline-success'>EMI</Link></Nav.Link>
                    <Nav.Link><Link to="/formfn" className='btn btn-outline-success'>Form Fn</Link></Nav.Link>
                    <Nav.Link><Link to="/digitalClock" className='btn btn-outline-success'>Digital Clock</Link></Nav.Link>
                </Navbar>
                </div>
            </div>
        </>
    )
}

export default MenuBar;
