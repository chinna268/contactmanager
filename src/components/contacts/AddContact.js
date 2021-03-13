import React, { Component } from 'react'
//class based components
import {Consumer }  from  '../../context';
import TextInputGroup from '../layout/TextinputGroup';
//import {v1 as uuid } from 'uuid';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email:'',
        phone: '',
        errors: {}

    }
    onSubmit = async (dispatch,e)=> {
        e.preventDefault();
        const { name,email,phone,errors} = this.state;
        //checking errors
        if(name === '')
        {
            this.setState({errors:{
                name:'Name is required'
            }});
            return;
        }
        if(email === '')
        {
            this.setState({errors:{
                email:'Email is required'
            }});
            return;
        }
        if(phone === '')
        {
            this.setState({errors:{
                phone:'phone-num is required'
            }});
            return;
        }
        const newContact ={
           // id: uuid(),
            name,
            email,
            phone
        }

const res =await axios.post('https://jsonplaceholder.typicode.com/users',
newContact)
dispatch({ type:'ADD_CONTACT',
payload: res.data })

        //dispatch({type: 'ADD_CONTACT',payload:
    //newContact})
//clear state
    this.setState({
        name:'',
        email:'',
        phone:'',
        errors: {}
    })
    this.props.history.push('/'); //redirecting to home after adding
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value});
    //onEmailChange = (e) => this.setState({email: e.target.value});
    //onPhoneChange = (e) => this.setState({Phone: e.target.value});

    render() { 
    
        const { name,email,phone,errors}=this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch} = value;
                    return(
                        <div className="card mb-3">
                <div className="card-header">
        Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind
                        (this,dispatch)}>
                        <TextInputGroup
                        label="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                        />
                  <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                        />
                        <TextInputGroup
                        label="phone"
                        name="phone"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                        />

                    <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-dark btn-block"
                    />
                    
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
    }
}
export default AddContact;
