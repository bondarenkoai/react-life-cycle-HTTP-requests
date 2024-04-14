import React from 'react';
import { ContactListContainer, List, ButtonList } from '../FormFormik.styled';
import { nanoid } from 'nanoid';

export const ContactList = ({ value, onDeleteContact }) => (
    <List>
        {value.map(({ id, name, number }) => {
            return (
                <ContactListContainer key={nanoid()}>
                    <li key={id}>
                        {name} : {number}
                    </li>
                    <ButtonList type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </ButtonList>
                </ContactListContainer>
            );
        })}
    </List>
);
