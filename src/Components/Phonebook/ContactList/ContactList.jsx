import React from 'react';
import { ContactListContainer, List, Button } from './ContactList.styled';
import { nanoid } from 'nanoid';

export const ContactList = ({ value, onDeleteContact }) => (
    <List>
        {value.map(({ id, name, number }) => {
            return (
                <ContactListContainer key={nanoid()}>
                    <li key={id}>
                        {name} : {number}
                    </li>
                    <Button type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </Button>
                </ContactListContainer>
            );
        })}
    </List>
);
