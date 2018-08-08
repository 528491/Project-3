import React, { Component } from "react";
// import {Container} from "reactstrap";
import {Container } from 'reactstrap';
import { Link  } from 'react-router-dom';

class Home extends Component {

// render() {
//   return (<div>
//    We in sign up
//  </div>);
// }

  render() {
    return (
      <Container>
          This is the Home Page you'd see if you were logged in
          <Link to = "/signup">
            Link to Register/Login
          </Link>

      </Container>
    )
  }
}

export default Home;
