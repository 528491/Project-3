import React from "react";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink 
} from 'reactstrap';
import MenuButton from "./MenuButton"

import LoginModal from "./LoginModal";



class AppNavbar extends React.Component {
    render() {
        return (
          <div>
            <Navbar color="primary" light expand="md">

              <NavbarBrand>
                <MenuButton/>
              </NavbarBrand>

              {/* <NavbarToggler onClick={this.toggle} /> */}
              {/* <Collapse isOpen={this.state.isOpen} navbar> */}

                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>

                <NavItem>
                  {/* <NavLink href="/login">Login</NavLink> */}
                  {/* <AppNavbar buttonLabel="Login"/> */}

                  <NavLink href="#">
                    <LoginModal buttonLabel="Login"/>
                  </NavLink>
                </NavItem>


                  <NavItem>
                    <NavLink href="/signup">Register</NavLink>
                  </NavItem>
                </Nav>

              {/* </Collapse> */}
            </Navbar>
          </div>
        );
      }

};

export default AppNavbar;
