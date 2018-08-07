import React from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';

class AppNavbar extends React.Component {
    render() {
        return (
          <div>
            <Navbar color="primary" light expand="md">

              <NavbarBrand href="/">
                <h3>Navbar</h3>
              </NavbarBrand>

              <NavbarToggler onClick={this.toggle} />
              {/* <Collapse isOpen={this.state.isOpen} navbar> */}

                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    {/* <NavLink href="https://github.com/reactstrap/reactstrap">Saved Articles</NavLink> */}
                    <NavLink href="/signup">Register</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <Button className="mr-2" color="success">Scrape New Articles!</Button>
                  </NavItem>
                  <NavItem>
                    <Button color="danger">Clear Articles</Button>
                  </NavItem> */}
                </Nav>

              {/* </Collapse> */}
            </Navbar>
          </div>
        );
      }
    
};

export default AppNavbar;