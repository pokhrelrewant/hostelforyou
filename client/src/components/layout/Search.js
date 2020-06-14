import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import HostelCard from "../hostelCard/HostelCard";
import retriever from "../../actions/retriever";

import Dropdown from "./Dropdown";
import Navbar from "./Navbar";

const arrayOfData = [
  {
    id: 1,
    name: "Pulchowk",
  },
  {
    id: 2,
    name: "Patan",
  },
  {
    id: 3,
    name: "Thapathali",
  },
  {
    id: 4,
    name: "Ratnapark",
  },
  {
    id: 5,
    name: "Babarmahal",
  },
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institutionSelectedValue: arrayOfData[0],
      locationSelectedValue: arrayOfData[0],
      search: "",
      buttonload: false,
    };
  }

  handleInstitutionChange = (institutionSelectedValue) => {
    console.log(arrayOfData[institutionSelectedValue - 1]);
    this.setState({
      institutionSelectedValue: arrayOfData[institutionSelectedValue - 1].name,
    });
  };
  handleLocationChange = (locationSelectedValue) => {
    console.log(locationSelectedValue);
    console.log(arrayOfData[locationSelectedValue - 1]);
    this.setState({
      locationSelectedValue: arrayOfData[locationSelectedValue - 1].name,
    });
  };
  handleSubmit = async (e) => {
    // e.preventDefault();
    this.setState({
      buttonload: true,
    });
    await this.props.retriever(
      this.state.search,
      this.state.locationSelectedValue
    );
    this.setState({ buttonload: false });
  };
  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  showData = () => {
    return <HostelCard />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div>
          <div className='container container-sm containerNirav my-5'>
            <img
              src={"/bermuda-searching.png"}
              alt='searching'
              style={{
                margin: "0 auto",
                marginBottom: "50px",
                display: "block",
              }}
              class='responsive'
            />
            <h3 className='mb-2'>Search Page </h3>
            <div className='input-group'>
              <input
                value={this.state.search}
                onChange={this.handleSearchChange}
                className='form-control '
                type='search'
                placeholder='Search for the hostel'
                aria-label='Search'
              />
              <button
                onClick={this.handleSubmit}
                className='btn btn-outline-success ml-xl-2'
                type='submit'
              >
                {this.state.buttonload ? (
                  <div
                    className='spinner-border m-1'
                    style={{ width: "15px", height: "15px" }}
                    role='status'
                  >
                    <span className='sr-only'>Loading...</span>
                  </div>
                ) : (
                  "Search"
                )}
              </button>
            </div>
            <br />
            <div className='row'>
              <div className='col'>
                <label>Nearby Institutions</label>
                <Dropdown
                  arrayOfData={arrayOfData}
                  onSelectChange={this.handleInstitutionChange}
                />{" "}
                <br />
                <br />
              </div>
              <div className='col'>
                <label>Hostel Address</label>
                <Dropdown
                  arrayOfData={arrayOfData}
                  onSelectChange={this.handleLocationChange}
                />{" "}
                <br />
                <br />
              </div>
            </div>
            <div className='card-deck'>{this.showData()}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.retriever.loading,
});

export default connect(mapStateToProps, { setAlert, retriever })(Search);
