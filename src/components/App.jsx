import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onFilterHandler = e => {
    const newArr = this.state.contacts.filter(item => {
      if (e.target.value == '') {
        return;
      } else {
        return item.name.toLowerCase().includes(e.target.value);
      }
    });
    this.setState({ filter: newArr });
  };
  onAddContacts = newContact => {
    this.state.contacts.map(item => {
      if (item.name == newContact.name) {
        alert(`${newContact.name} is already in contact list`);
      }
    });

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
     
    }));
  };

  onDeleteItem = id => {
    const filteredArr = this.state.contacts.filter(item => item.id != id);
    this.setState({
      contacts: filteredArr,
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onAdd={this.onAddContacts} />
        <h1>Contacts</h1>
        <Filter onFilter={this.onFilterHandler} />

        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onFilter={this.onDeleteItem}
        />
      </div>
    );
  }
}

export default App;
