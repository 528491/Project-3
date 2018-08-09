import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class MenuButton extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  
    render() {
      return (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Calendar App
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Create Event</DropdownItem>
            <DropdownItem>Log Out</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }
  }