import React, { Fragment, Component } from "react";
import Input from "./Input";
import InLineInput from "./InLineInput";
import Button from "./Button";
import Select from "./Select";
import CheckBox from "./CheckBox";
import Upload from "./Upload";
import "./Login.css";
import axios from "../../config/axios";
import uuid from "uuid";

// this needs to be imported from the database
// data for the drop down menu

class ModifiedFrom extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      nearByInstitutions: [{ institute: "" }],
      specialFeatures: [{ feature: "" }],
      newUser: {
        id: "",
        hostelName: "",
        hostelAddress: "",
        phoneNumber: "",
        discountOffered: "",
        age: "",
        admissionFee: "",
        monthlyFeeOneSeater: "",
        monthlyFeeTwoSeater: "",
        monthlyFeeThreeSeater: "",
        monthlyFeeFourSeater: "",
        totalRooms: "",
        totalSeatOne: "",
        totalSeatTwo: "",
        totalSeatThree: "",
        totalSeatFour: "",
        availableSeatOne: "",
        availableSeatTwo: "",
        availableSeatThree: "",
        availableSeatFour: "",
        timesADay: "",
        laundry: "",
        facilities: [],
        meat: "",
        furnitures: [],
        about: "",
      },

      laundryOptions: [
        "Once a Week",
        "Twice a Week",
        "Two Pairs a week",
        "Three Pairs a week",
        "Unavilable",
      ],
      meatOptions: ["Once a week", "Twice a Week"],
      facilitiesOptions: [
        "Free Wifi",
        "Electricity",
        "Running Water",
        "AC",
        "Heater",
        "Fan",
      ],
      furnituresOptions: [
        "Bed",
        "Chair",
        "Table",
        "CupBoard",
        "Curtains",
        "Floormat",
        "BedSheet",
        "Blanket",
        "Pillow",
      ],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleFacilities = this.handleFacilities.bind(this);
    this.handleFurnitures = this.handleFurnitures.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);

    this.handleAddInstitutionsField = this.handleAddInstitutionsField.bind(
      this
    );
    this.handleRemoveInstitutions = this.handleRemoveInstitutions.bind(this);
    this.handleInstitutionsChange = this.handleInstitutionsChange.bind(this);

    this.handleAddSpecialFeatures = this.handleAddSpecialFeatures.bind(this);
    this.handleRemoveSpecialFeatures = this.handleRemoveSpecialFeatures.bind(
      this
    );
    this.handleSpecialFeaturesChange = this.handleSpecialFeaturesChange.bind(
      this
    );
  }
  handleAddInstitutionsField = () => {
    this.setState({
      nearByInstitutions: this.state.nearByInstitutions.concat([
        { institute: "" },
      ]),
    });
  };

  handleRemoveInstitutions = (index) => {
    this.setState({
      nearByInstitutions: this.state.nearByInstitutions.filter(
        (s, idx) => index !== idx
      ),
    });
  };

  handleInstitutionsChange = (index, event) => {
    const values = this.state.nearByInstitutions.map(
      (nearByInstitution, sidx) => {
        if (index !== sidx) return nearByInstitution;

        return { ...nearByInstitution, institute: event.target.value };
      }
    );

    this.setState({ nearByInstitutions: values });
  };

  handleAddSpecialFeatures = () => {
    this.setState({
      specialFeatures: this.state.specialFeatures.concat([{ feature: "" }]),
    });
  };

  handleRemoveSpecialFeatures = (index) => {
    this.setState({
      specialFeatures: this.state.specialFeatures.filter(
        (s, idx) => index !== idx
      ),
    });
  };

  handleSpecialFeaturesChange = (index, event) => {
    const values = this.state.specialFeatures.map((specialFeature, sidx) => {
      if (index !== sidx) return specialFeature;
      return { ...specialFeature, feature: event.target.value };
    });

    this.setState({ specialFeatures: values });
  };

  generateID() {
    // this.setState({ newUser: { id: uuid.v4() } });
    return this.state.newUser.id;
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => ({ newUser: { ...prevState.newUser, [name]: value } }),
      () => console.log(this.state.newUser)
    );
  }
  handleNumbers(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => ({ newUser: { ...prevState.newUser, [name]: value } }),
      () => console.log(this.state.newUser)
    );
  }
  handleFacilities(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.facilities.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.facilities.filter(
        (s) => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.facilities, newSelection];
    }

    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, facilities: newSelectionArray },
    }));
  }
  handleFurnitures(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.furnitures.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.furnitures.filter(
        (s) => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.furnitures, newSelection];
    }

    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, furnitures: newSelectionArray },
    }));
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    let userData = {
      name: this.state.newUser.hostelName,
      location: this.state.newUser.hostelAddress,
      nearbyInstitutions: JSON.stringify(this.state.nearByInstitutions),
      phoneNo: this.state.newUser.phoneNumber,
      discountOffered: this.state.newUser.discountOffered,
      fee: {
        admission: this.state.newUser.admissionFee,
        monthly: [
          {
            single: this.state.newUser.monthlyFeeOneSeater,
            double: this.state.newUser.monthlyFeeTwoSeater,
            triple: this.state.newUser.monthlyFeeThreeSeater,
            fourS: this.state.newUser.monthlyFeeFourSeater,
          },
        ],
      },
      availableSeating: [
        {
          single: this.state.newUser.totalSeatOne,
          double: this.state.newUser.totalSeatTwo,
          triple: this.state.newUser.totalSeatThree,
          fourS: this.state.newUser.totalSeatFour,
        },
      ],
      hostelFeatures: [
        {
          timesFoodOffered: this.state.newUser.timesADay,
          notableFeatures: [],
          laundry: [
            {
              availablePerWeek: this.state.newUser.laundry,
            },
          ],
          FurnitureAndClothing: this.state.newUser.furnitures,
        },
      ],

      specialFeatures: JSON.stringify(this.state.specialFeatures),
      Photos: this.state.newUser.id,
    };
    console.log(userData.nearbyInstitutions);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/add_hostel", userData, config);
      console.log(res.data);
    } catch (err) {}
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        hostelName: "",
        hostelAddress: "",
        nearByInstitution: "",
        phoneNumber: "",
        discountOffered: "",
        age: "",
        admissionFee: "",
        monthlyFeeOneSeater: "",
        monthlyFeeTwoSeater: "",
        monthlyFeeThreeSeater: "",
        monthlyFeeFourSeater: "",
        totalRooms: "",
        totalSeatOne: "",
        totalSeatTwo: "",
        totalSeatThree: "",
        totalSeatFour: "",

        availableSeatOne: "",
        availableSeatTwo: "",
        availableSeatThree: "",
        availableSeatFour: "",
        timesADay: "",
        facilities: [],
        laundry: "",
        furnitures: [],
        meat: "",
        specialFeatures: "",
      },
    });
  }

  // to focus in the username at first

  render() {
    return (
      <form>
        <h3>Form Page </h3>
        <div className='container'>
          <div className='form-group formFields'>
            {/*   <label>User Name</label> */}
            <Input
              inputType={"text"}
              title={"Hostel Name"}
              name={"hostelName"}
              value={this.state.newUser.hostelName}
              placeholder={"Enter Name of Hostel"}
              handleChange={this.handleInput}
            />{" "}
            {/* Name of the Hostel */}
            <Input
              inputType={"text"}
              title={"Hostel Address"}
              name={"hostelAddress"}
              value={this.state.newUser.hostelAddress}
              placeholder={"Enter Hostel Address"}
              handleChange={this.handleInput}
            />{" "}
            {/* Address of the hostel */}
            <label htmlFor='nearByInstitutions'> Nearby Institutions</label>
            <div className='form-row'>
              {this.state.nearByInstitutions.map((nearByInstitution, index) => (
                <Fragment>
                  <div className='form-group col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='nearByInstitutions'
                      name='nearByInstitutions'
                      value={nearByInstitution.name}
                      onChange={(event) =>
                        this.handleInstitutionsChange(index, event)
                      }
                    />
                  </div>

                  <div className='form-group col-sm-2'>
                    <button
                      className='btn btn-link'
                      type='button'
                      onClick={() => this.handleRemoveInstitutions(index)}
                    >
                      Remove
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
            <button
              className='btn btn-link'
              type='button'
              onClick={() => this.handleAddInstitutionsField()}
            >
              Add
            </button>
            <Input
              inputType={"phoneNumber"}
              title={"Phone Number"}
              name={"phoneNumber"}
              value={this.state.newUser.phoneNumber}
              placeholder={"Enter Phone Number of the hostel"}
              handleChange={this.handleInput}
            />{" "}
            {/* Phone Number of the hostel */}
            {/* <Input inputType={'number'} 
                            name={'age'}
                            title= {'Age'} 
                            value={this.state.newUser.age} 
                            placeholder = {'Enter your age'}
                            handleChange={this.handleNumbers} 
                            /> {/* Age */}
            <Input
              inputType={"number"}
              name={"discountOffered"}
              title={"Discount Offered"}
              value={this.state.newUser.discountOffered}
              placeholder={"Enter Discount Offered by Hostel"}
              handleChange={this.handleNumbers}
            />{" "}
            {/* Discount Offered */}
            <Input
              inputType={"number"}
              name={"admissionFee"}
              title={"Admission Fee"}
              value={this.state.newUser.admissionFee}
              placeholder={"Enter the Admission Fee"}
              handleChange={this.handleNumbers}
            />{" "}
            {/* Age */}
            <br />
            <label>Monthly Fee </label>
            <br />
            <InLineInput
              inputType={"number"}
              name={"monthlyFeeOneSeater"}
              title={"One Seater"}
              value={this.state.newUser.monthlyFeeOneSeater}
              placeholder={"Monthly Fee for One Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"monthlyFeeTwoSeater"}
              title={"Two Seater"}
              value={this.state.newUser.monthlyFeeTwoSeater}
              placeholder={"Monthly Fee for Two Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"monthlyFeeThreeSeater"}
              title={"Three Seater"}
              value={this.state.newUser.monthlyFeeThreeSeater}
              placeholder={"Monthly Fee for Three Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"monthlyFeeFourSeater"}
              title={"Four Seater"}
              value={this.state.newUser.monthlyFeeFourSeater}
              placeholder={"Monthly Fee for Four Seater"}
              handleChange={this.handleNumbers}
            />
            <br />
            <Input
              inputType={"number"}
              title={"Total Number of Rooms"}
              name={"totalRooms"}
              value={this.state.newUser.totalRooms}
              placeholder={"Enter Total No. of Rooms"}
              handleChange={this.handleInput}
            />{" "}
            {/* Address of the hostel */}
            <br />
            <label>Total Rooms in :</label>
            <br />
            <InLineInput
              inputType={"number"}
              name={"totalSeatOne"}
              title={"One Seater "}
              value={this.state.newUser.totalSeatOne}
              placeholder={"Total Seats in 1 Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"totalSeatTwo"}
              title={"Two Seater "}
              value={this.state.newUser.totalSeatTwo}
              placeholder={"Total Seats in 2 Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"totalSeatThree"}
              title={"Three Seater "}
              value={this.state.newUser.totalSeatThree}
              placeholder={"Total Seats in 3 Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"totalSeatFour"}
              title={"Four Seater "}
              value={this.state.newUser.totalSeatFour}
              placeholder={"Total Seats in 4 Seater"}
              handleChange={this.handleNumbers}
            />
            <br />
            <label>Available Seating Option For :</label>
            <br />
            <InLineInput
              inputType={"number"}
              name={"availableSeatOne"}
              title={"One Seater "}
              value={this.state.newUser.availableSeatOne}
              placeholder={"Available Seats in 1 Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"availableSeatTwo"}
              title={"Two Seater "}
              value={this.state.newUser.availableSeatTwo}
              placeholder={"Available Seats in 2 Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"availableSeatThree"}
              title={"Three Seater "}
              value={this.state.newUser.availableSeatThree}
              placeholder={"Available Seats in 3 Seater"}
              handleChange={this.handleNumbers}
            />
            <InLineInput
              inputType={"number"}
              name={"availableSeatFour"}
              title={"Four Seater "}
              value={this.state.newUser.availableSeatFour}
              placeholder={"Available Seats in 4 Seater"}
              handleChange={this.handleNumbers}
            />
            <br />
            <div className=' form-group row'>
              <label className='col-form-label col'>Food Offered</label>

              <input
                className='col-4 form-control'
                type='number'
                name='timesADay'
                id='Four Seater '
                value={this.state.newUser.timesADay}
                placeholder='Times'
                onChange={this.handleNumbers}
              />

              <label className='col-form-label col'> Times a day</label>
            </div>
            <br />
            <CheckBox
              title={"Facilities"}
              name={"facilities"}
              options={this.state.facilitiesOptions}
              selectedOptions={this.state.newUser.facilities}
              handleChange={this.handleFacilities}
            />{" "}
            {/* Skill */}
            <Select
              title={"Laundry"}
              name={"laundry"}
              options={this.state.laundryOptions}
              value={this.state.newUser.laundry}
              placeholder={"Select laundry"}
              handleChange={this.handleInput}
            />{" "}
            {/* Age Selection */}
            <Select
              title={"Meat"}
              name={"meat"}
              options={this.state.meatOptions}
              value={this.state.newUser.meat}
              placeholder={"Select time"}
              handleChange={this.handleInput}
            />{" "}
            {/* Age Selection */}
            <CheckBox
              title={"Furnitures"}
              name={"furnitures"}
              options={this.state.furnituresOptions}
              selectedOptions={this.state.newUser.furnitures}
              handleChange={this.handleFurnitures}
            />{" "}
            {/* Skill */}
            <label htmlFor='specialFeatures'> Special Features </label>
            <div className='form-row'>
              {this.state.specialFeatures.map((specialFeature, index) => (
                <Fragment>
                  <div className='form-group col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='specialFeatures'
                      name='specialFeatures'
                      value={specialFeature.name}
                      onChange={(event) =>
                        this.handleSpecialFeaturesChange(index, event)
                      }
                    />
                  </div>

                  <div className='form-group col-sm-2'>
                    <button
                      className='btn btn-link'
                      type='button'
                      onClick={() => this.handleRemoveSpecialFeatures(index)}
                    >
                      Remove
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
            <button
              className='btn btn-link'
              type='button'
              onClick={() => this.handleAddSpecialFeatures()}
            >
              Add
            </button>
            <br />
            {/* <div class="row ">
                            <label 
                            class="col col-form-label "  for="seaterOne">One Seater</label>
                            <input 
                            type="number" 
                            class="col-8 form-control"
                            name="seaterOne" 
                            id="seaterOne"
                            value={this.state.newUser.monthlyFee1}
                            onChange={this.handleNumbers}
                            placeholder={' Monthly Fee for one seater' }/>
                        </div> 
                                    */}
            <Upload id={this.generateID()} />
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              style={buttonStyle}
            />{" "}
            {/*Submit */}
            <Button
              action={this.handleClearForm}
              type={"secondary"}
              title={"Clear"}
              style={buttonStyle}
            />{" "}
            {/* Clear the form */}
          </div>
        </div>
      </form>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px",
};

export default ModifiedFrom;
