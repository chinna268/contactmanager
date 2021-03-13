import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
// we can execute code of line 33 heer also
//static keyword
state={
    showContactInfo: false
};
onDeleteClick = async (id,dispatch) => {
   // console.log('clicked')
try {
await axios.delete
(`https://jsonplaceholder.typicode.com/users/${id}`);
   //.then(res => )
   dispatch({type:'DELETE_CONTACT', payload: id});
}
catch(e)
{
    dispatch({type:'DELETE_CONTACT', payload: id})
} 
}

    render() {
           const {id,name,email,phone } =
           this.props.contact;
           const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => 
                {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                <h4>
                    {name}{' '}<i onClick={() => this.setState({
                        showContactInfo:!this.state.showContactInfo })}
                        className="fas fa-caret-down"
                        style={{cursor: 'Pointer'}}
                        />
                        <i className="fas fa-times" 
                        style={{cursor: 'pointer',
                        float:'right',color:'red'}}
                        onClick={this.onDeleteClick.bind
                             (this,id,dispatch)}
                             />
                             <Link to ={`contact/edit/${id}`}>
                                 <i 
                                 className="fas fa-pencil-alt"
                                 style={{
                                     cursor: 'pointer',
                                     float:'right',
                                     color:'black',
                                     marginright: '1rem'
                
                                 }}
                                 ></i>
                                 </Link>
                        
                </h4>
                {
                    showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email:
                    {email}</li>
                    <li className="list-group-item">phone:
                    {phone}</li>
                </ul>) : null}
                
            </div> 
                    )
                }}
                </Consumer>

        )
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    
    
}

export default Contact;