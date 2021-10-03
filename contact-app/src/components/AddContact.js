import React, { useState } from 'react';

const AddContact = (props) => {
    const [contact, setContact] = useState({name: '', phone:'', email:''});
    
    const add = (e) => {
        e.preventDefault();
        if(contact.name === "" || contact.phone === "" || contact.email === "") {
            console.log("All the fields are mandatory!");
            return;
        }
        console.log(contact);
        props.addContactHandler(contact);
        setContact({name: '', phone:'', email:''});

    };

    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className = "ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value= {contact.name}
                        onChange={(e) => setContact({contact, name: e.target.value})}
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
                <button className="ui button blue">Add Contact</button>
            </form>
      </div>
    );
};

export default AddContact;