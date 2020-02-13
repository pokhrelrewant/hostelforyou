import React, { Component } from "react";
import Input from './Input'
import './Login.css';
import  Select from './Select'
import Button from './Button'

 class SignUp extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
        this.state = {
            newUser: {
              studentName:'',
              studentEmail:'',
              studentAddress:'',
              dateToJoin:'',
              phoneNumber:'',
            },
            expectedToJoin: ['Within 1-2 Days','Within a week','Within 10-15 Days','Within a month' ]
      
        }
        this.handleInput = this.handleInput.bind(this);
       
    }
    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, [name]: value
            }
        }), 
        () => console.log(this.state.newUser))
   }
   handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    alert(`${JSON.stringify(userData)}`);
    
    }    




    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className='container'>
                    <div className="form-group formFields">
                        <Input inputType={'text'}
                                title= {'Student Name'} 
                                name= {'studentName'}
                                value={this.state.newUser.studentName} 
                                placeholder = {'Enter your Name'}
                                handleChange = {this.handleInput}
                                /> 

                        <Input inputType={'text'}
                                title= {'Address'} 
                                name= {'studentAddress'}
                                value={this.state.newUser.studentAddress} 
                                placeholder = {'Enter your Address'}
                                handleChange = {this.handleInput}
                                /> 
                        <Input inputType={'phoneNumber'}
                                title= {'Phone Number'} 
                                name= {'phoneNumber'}
                                value={this.state.newUser.phoneNumber} 
                                placeholder = {'Enter Phone Number of the hostel'}
                                handleChange = {this.handleInput}
                                /> 
                        <Input inputType={'email'}
                                title= {'Email'} 
                                name= {'studentEmail'}
                                value={this.state.newUser.studentEmail} 
                                placeholder = {'Enter your Email'}
                                handleChange = {this.handleInput}
                                /> 
                       
                        <Select title={'Expected Date To Join'}
                                name={'dateToJoin'}
                                options = {this.state.expectedToJoin} 
                                value = {this.state.newUser.dateToJoin}
                                placeholder = {'Select Date to Join'}
                                handleChange = {this.handleInput}
                                /> 

                        <Button 
                                action = {this.handleFormSubmit}
                                type = {'primary'} 
                                title = {'Submit'} 
                                style={buttonStyle}
                                /> { /*Submit */ }
                    </div>


                </div>
               
               
            </form>
        );
    }
}
const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }
export default SignUp