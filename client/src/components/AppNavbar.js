import React from "react";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink 
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
