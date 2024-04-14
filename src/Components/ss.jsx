import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button, PhonebookContainer, Label, InputName, Text, List } from './Phonebook.styled';

export class Phonebook extends Component {
    nameInputId = nanoid();
    numberInputId = nanoid();

    state = {
        contacts: [
            { id: nanoid(), name: 'Emma Williams', number: 1 },
            { id: nanoid(), name: 'Alex Johnson', number: 2 },
            { id: nanoid(), name: 'Ethan Anderson', number: 3 },
        ],
        name: '',
        number: '',
    };

    handleChange = e => {
        this.setState({ name: e.target.value });
    };

    handleChangeNumber = e => {
        this.setState({ number: e.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);
        console.log(this.state.name);
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        };
        const updatedContacts = [...this.state.contacts, newContact];
        this.setState({ contacts: updatedContacts, name: '', number: '' });
    };

    render() {
        const { name } = this.state;
        const { number } = this.state;

        return (
            <PhonebookContainer>
                <form onSubmit={this.handleSubmit}>
                    <Label htmlFor={this.nameInputId}>
                        Name
                        <InputName
                            type="text"
                            name="name"
                            placeholder="Enter name..."
                            value={name}
                            id={this.nameInputId}
                            onChange={this.handleChange}
                            required
                        />
                    </Label>
                    <Label htmlFor={this.numberInputId}>
                        Number
                        <InputName
                            type="tel"
                            name="number"
                            placeholder="Enter number..."
                            value={number}
                            id={this.numberInputId}
                            onChange={this.handleChangeNumber}
                            required
                        />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </form>
                <Text>
                    Contact:
                    <br />
                    <List>
                        {this.state.contacts.map(contact => {
                            return (
                                <li key={contact.id}>
                                    {contact.name} : {contact.number}
                                </li>
                            );
                        })}
                    </List>
                </Text>
            </PhonebookContainer>
        );
    }
}
