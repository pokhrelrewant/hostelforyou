import React, { Component } from "react";

class Dropdown extends Component {
  handleChange = event => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let i = 0;
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map(data => (
      <option key={i++} value={data.name}>
        {data.name}
      </option>
    ));

    return (
      <select
        className='custom-search-select form-control'
        onChange={this.handleChange}
      >
        <option id='-1' value=''>Select Item</option>
        {options}
      </select>
    );
  }
}

export default Dropdown;
