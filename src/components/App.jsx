import React, { Component } from "react";
import { nanoid } from "nanoid";
import contacts from '../data/contacts.json'
import Container from "./Container";
import Form from "./BookContacts/Form";
import ListContact from "./BookContacts/ListContact";


class App extends Component {

  state = {
    contacts
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };


    const onFindName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    const onFindNumber = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (onFindName ) {
      alert(`${name} is already in contacts.`)
    } else if (onFindNumber) {
      alert(`${number} is already in contacts.`)
    } else {
          this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
    };

  };

  
  deleteContact = index => {
     this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== index)
    }));
  }

  render() { 
    const { contacts } = this.state;
    return (
      <Container>
        <h1>PhoneBook</h1>
        <Form onSubmit={this.addContact} />
        <ListContact contacts={contacts} deleteContact={this.deleteContact} />
      </Container>
    )
  }
};


export default App;




