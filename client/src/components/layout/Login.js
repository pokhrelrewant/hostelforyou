import React, { Component } from "react";
import Dropdown from "./Dropdown";
// import "./Login.css";

// this needs to be imported from the database
// data for the drop down menu
const arrayOfData = [
  {
    id: "1 - Jerry",
    name: "Jerry"
  },
  {
    id: "2 - Elaine",
    name: "Elaine"
  },
  {
    id: "3 - Kramer",
    name: "Kramer"
  },
  {
    id: "4 - George",
    name: "George"
  }
];

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institutionSelectedValue: "Nothing selected",
      locationSelectedValue: "Nothing Selected",
      gender: ""
    };
  }

  handleInstitutionChange = institutionSelectedValue => {
    this.setState({
      institutionSelectedValue: institutionSelectedValue
    });
  };
  handleLocationChange = locationSelectedValue => {
    this.setState({
      locationSelectedValue: locationSelectedValue
    });
  };

  handleSubmit = event => {
    alert(
      `${this.state.institutionSelectedValue} ${this.state.locationSelectedValue} ${this.state.gender}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <h3>Search Page </h3>

        <div className='container'>
          <p>Nearby Institutions</p>
          <Dropdown
            arrayOfData={arrayOfData}
            onSelectChange={this.handleInstitutionChange}
          />{" "}
          <br />
          <br />
        </div>
        <div className='container'>
          <p>Hostel Address</p>
          <Dropdown
            arrayOfData={arrayOfData}
            onSelectChange={this.handleLocationChange}
          />{" "}
          <br />
          <br />
        </div>

        <div>
          <button
            onClick={this.handleSubmit}
            type='submit'
            id='submitButton'
            className='btn btn-primary btn-block justfy-content-center'
          >
            Submit
          </button>
          {/*  <p className="forgot-password text-left">
                    Forgot <a href="#">password?</a>
                </p> */}
        </div>
      </form>
    );
  }
}
export default Login;
