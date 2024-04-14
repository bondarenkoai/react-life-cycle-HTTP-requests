import { Component } from "react";
import { nanoid } from "nanoid";
import { PhonebookContainer, Text } from "./Phonebook.styled";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class Phonebook extends Component {
    state = {
        contacts: [
            { id: nanoid(), name: "Emma Williams", number: "+459-12-56" },
            { id: nanoid(), name: "Alex Johnson", number: "+443-89-12" },
            { id: nanoid(), name: "Ethan Anderson", number: "+645-17-79" },
            { id: nanoid(), name: "Mate Johnson", number: "+555-123-456" },
        ],
        filter: "",
    };

    handleChangeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value });
    };

    handleFilter = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    handleDeleteContact = (delContactId) => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(({ id }) => id !== delContactId),
        }));
    };

    handleAddNewContact = (newContact) => {
        const existingContact = this.state.contacts.find(
            (contact) => contact.name === newContact.name
        );

        if (existingContact) {
            alert(`${existingContact.name} contact already in contacts`);
            return;
        }

        this.setState((prevState) => ({
            contacts: [...prevState.contacts, newContact],
        }));
    };

    componentDidMount() {
        const storedData = JSON.parse(localStorage.getItem("contacts"));

        if (storedData) {
            this.setState({ contacts: storedData });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            console.log("update contacts");
            localStorage.setItem(
                "contacts",
                JSON.stringify(this.state.contacts)
            );
        }
    }

    render() {
        const { filter } = this.state;
        const filteredContacts = this.handleFilter();

        return (
            <PhonebookContainer>
                <Text>Phonebook</Text>
                <ContactForm setContact={this.handleAddNewContact} />
                <Text>Contact:</Text>
                <Filter value={filter} onChange={this.handleChangeFilter} />
                <ContactList
                    value={filteredContacts}
                    onDeleteContact={this.handleDeleteContact}
                />
            </PhonebookContainer>
        );
    }
}
