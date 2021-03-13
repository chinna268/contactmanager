import React, { Component } from 'react'
//class based components

class AddContact extends Component {
  /* state = {
        name: '',
        email:'',
        Phone: ''
    }
    */
constructor(props)
{
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();

}

    onSubmit = e => {
        e.preventDefault();
        
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value

        }
        console.log(contact);
    }
    /*
    onChange = e => this.setState({ [e.target.name]: e.target.value});
    //onEmailChange = (e) => this.setState({email: e.target.value});
    //onPhoneChange = (e) => this.setState({Phone: e.target.value});

    */

    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '777-777-7777'
    }

    render() {
        const { name,email,phone,id}=this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">
        Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlfor="name">Name</label>
                            <input 
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            placeholder="Enter Name..."
                            defaultValue={name}
                            ref={this.nameInput}
                            //onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlfor="email">Email</label>
                            <input 
                            type="email"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email..."
                            defaultValue={email}
                            ref={this.emailInput}
                           // onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlfor="phone">phone</label>
                            <input 
                            type="text"
                            name="phone"
                            className="form-control form-control-lg"
                            placeholder="Enter phone..."
                            defaultValue={phone}
                            ref={this.phoneInput}
                           // onChange={this.onChange}
                            />
                        </div>
                    <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-dark btn-block"
                    />
                    </form>
                </div>
            </div>
        )
    }
}
export default AddContact;
