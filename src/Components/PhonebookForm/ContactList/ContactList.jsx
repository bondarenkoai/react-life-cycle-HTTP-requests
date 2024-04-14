import PropTypes from "prop-types";
import { ContactListContainer, List, ButtonList } from "../Phonebook.styled";
import { nanoid } from "nanoid";

export const ContactList = ({ value, onDeleteContact }) => (
    <List>
        {value.map(({ id, name, number }) => {
            return (
                <ContactListContainer key={nanoid()}>
                    <li key={id}>
                        {name} : {number}
                    </li>
                    <ButtonList
                        type="button"
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </ButtonList>
                </ContactListContainer>
            );
        })}
    </List>
);

ContactList.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
