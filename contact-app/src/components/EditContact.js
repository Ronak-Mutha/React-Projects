import React, { useState } from 'react';
import { useHistory } from "react-router";

const EditContact = (props) => {
    const history = useHistory();
    console.log(props);
    const { id, name, phone, email } = props.location.state.contact;
    const [contact, setContact] = useState({id, name, phone, email});
    
    const update = (e) => {
        e.preventDefault();
        if(contact.name === "" || contact.phone === "" || contact.email === "") {
            alert("Please fill all the fields.");
            return;
        }
        console.log(contact);
        props.updateContactHandler(contact);
        setContact({name: '', phone:'', email:''});
        history.push("/");

    };

    return(
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className = "ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value= {contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                    />
                </div>

                <div className="field">
                    <label>Phone</label>
                    <input 
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        value= {contact.phone}
                        onChange={(e) => setContact({...contact, phone: e.target.value})}
                    />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value= {contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                    />
                </div>
                <button className="ui button blue">Update Contact</button>
            </form>
      </div>
    );
};

export default EditContact;