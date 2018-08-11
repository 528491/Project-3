import React from 'react';
import { Container, NavLink, Label, Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        email: "",
        password: "",
        authenticated: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:3001/api/users",
    {
      email: this.state.email,
      password: this.state.password
    })
    .then((data) => {
      console.log(data);

      if(data.data.success) {
          this.setState({authenticated: true})
      }


    })
    .catch(error => {
      console.log(error.response);
    });


    // API.getUsers(this.state).then(function(response){
    //   console.log(response);
    // }).catch(function(err){
    //   console.log(err);
    // })
  };

  handleLogin = event => {
    event.preventDefault();
    axios.get("http://localhost:3001/api/users/login",
    {
      email: this.state.email,
      password: this.state.password
    })
    .then((data) => {
      console.log(data);

      if(data.data.success) {
        this.setState({authenticated: true})
      }


    })
    .catch(error => {
      console.log(error.response);
    });
  };

  render() {

    if(this.state.authenticated === true) {
        return (<Redirect to='/' />);
    }

    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        {/* <NavLink href="#" onClick={this.toggle}>
            {this.props.buttonLabel}
        </NavLink> */}

        <p onClick={this.toggle}>
            {this.props.buttonLabel}
        </p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
          <ModalBody>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                    onChange = {this.handleInputChange}/>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"
                    onChange={this.handleInputChange}/>
                </FormGroup>

                {/* <Button onClick={this.handleFormSubmit}>Register</Button> */}
                <Button onClick = {this.handleLogin}>Log In</Button>
            </Form>
          </ModalBody>

          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default LoginModal;