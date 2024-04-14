import React from "react";
import { InputName, TextP } from "../Phonebook.styled";

export const Filter = ({ contacts, onChange }) => (
    <label>
        <TextP>Find contacts by name</TextP>
        <InputName
            type="text"
            name="filter"
            placeholder="Enter find name..."
            value={contacts}
            onChange={onChange}
        />
    </label>
);
