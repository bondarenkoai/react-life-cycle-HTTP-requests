import React from 'react';
import { InputName, Text } from './Filter.styled';

export const Filter = ({ contacts, onChange }) => (
    <label>
        <Text>Find contacts by name</Text>
        <InputName
            type="text"
            name="filter"
            placeholder="Enter find name..."
            value={contacts}
            onChange={onChange}
        />
    </label>
);
