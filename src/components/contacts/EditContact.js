import React, { Component } from 'react'
//class based components
import {Consumer }  from  '../../context';
import TextInputGroup from '../layout/TextinputGroup';
//import {v1 as uuid } from 'uuid';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email:'',
        phone: '',
        errors: {}

    }
    async componentDidMount() {
        const {id} =this.props.match.params;
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact =res.data;
        this.setState ({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })

    }
    onSubmit = async (dispatch,e)=> {
        e.preventDefault();

        const { name,email,phone,errors } = this.state;
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

        const updContact = {
            name,
          email,
          phone

        }
        const {id} = this.props.match .params;
        const res = await axios .put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);
        dispatch({type:'UPDATE_CONTACT',payload:
    res.data});
        
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
                <div className="card-header">Edit
                Contact
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
export default EditContact;
