import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Label, InputName } from './ContactForm.styled';

export class ContactForm extends Component {
    nameInputId = nanoid();
    numberInputId = nanoid();

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        this.setState({ name: e.currentTarget.value });
    };

    handleChangeNumber = e => {
        this.setState({ number: e.currentTarget.value });
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

        this.props.setContact(newContact);

        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
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
        );
    }
}
