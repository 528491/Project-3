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
import MenuButton from "./MenuButton"

class SplashNavbar extends React.Component {
    render() {
        return (
          <div>
            <Navbar color="primary" light expand="md">

              <NavbarBrand>
                FamilyDay
              </NavbarBrand>

              {/* <NavbarToggler onClick={this.toggle} /> */}
              {/* <Collapse isOpen={this.state.isOpen} navbar> */}

                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>

                <NavItem>
                  <NavLink href="/login">Products</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/login">Support</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>


                  <NavItem>
                    {/* <NavLink href="https://github.com/reactstrap/reactstrap">Saved Articles</NavLink> */}
                    <NavLink href="/signup">Register</NavLink>
                  </NavItem>
                </Nav>

              {/* </Collapse> */}
            </Navbar>
          </div>
        );
      }
    
};

export default SplashNavbar;