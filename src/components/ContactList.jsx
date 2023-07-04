import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.filter == ''
          ? this.props.contacts.map(item => {
              return (
                <li key={nanoid()}>
                  {item.name}:{item.number}
                  <Button
                    onClick={() => this.props.onFilter(item.id)}
                    variant="contained"
                  >
                    Contained
                  </Button>
                </li>
              );
            })
          : this.props.filter.map(item => {
              return (
                <List key={nanoid()}>
                  <ListItem>
                    {item.name}:{item.number}
                    <Button
                      onClick={() => this.props.onFilter(item.id)}
                      variant="contained"
                    >
                      Contained
                    </Button>
                  </ListItem>
                </List>
              );
            })}
      </ul>
    );
  }
}

export default ContactList;
