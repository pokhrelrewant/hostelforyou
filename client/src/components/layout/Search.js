import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import HostelCard from "../hostelCard/HostelCard";
import retriever from "../../actions/retriever";

import Dropdown from "./Dropdown";

const arrayOfData = [
  {
    id: "1",
    name: "Pulchowk"
  },
  {
    id: "2 ",
    name: "Patan"
  },
  {
    id: "3 ",
    name: "Thapathali"
  },
  {
    id: "4 ",
    name: "Ratnapark"
  },
  {
    id: "5 ",
    name: "Babarmahal"
  }
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institutionSelectedValue: "Nothing selected",
      locationSelectedValue: "Nothing Selected",
      search: ""
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
  handleSubmit = e => {
    // e.preventDefault();
    console.log(this.state.locationSelectedValue);
    retriever(this.state.search, this.state.locationSelectedValue.name);
  };
  handleSearchChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  showData = () => {
    return (
      <div>
        <HostelCard />
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <div>
          <h3>Search Page </h3>
          <div className='container'>
            <div className='input-group'>
              <input
                value={this.state.search}
                onChange={this.handleSearchChange}
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search for the hostel'
                aria-label='Search'
              />
              <button
                onClick={this.handleSubmit}
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </div>
            <br />
            <div className=' row '>
              <div className='pr-5'>
                <label>Nearby Institutions</label>
                <Dropdown
                  arrayOfData={arrayOfData}
                  onSelectChange={this.handleInstitutionChange}
                />{" "}
                <br />
                <br />
              </div>
              <div className='pr-5'>
                <label>Hostel Address</label>
                <Dropdown
                  arrayOfData={arrayOfData}
                  onSelectChange={this.handleLocationChange}
                />{" "}
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        {this.showData()}
      </Fragment>
    );
  }
}

export default connect(null, { setAlert })(Search);
