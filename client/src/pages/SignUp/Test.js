import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Test extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }




    render() {
      return (
        <div>
        hey there
        <button onClick={() => {
            console.log('here');
              return (<Redirect to='/signup' />)
            }}></button>
        </div>
      );
    }
  }

  export default Test;
