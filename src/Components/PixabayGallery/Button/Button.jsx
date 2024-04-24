import PropTypes from 'prop-types';
import { ButtonStytled } from './Button.stytled';

export const Button = ({ text, type, onClick }) => {
    return (
        <ButtonStytled type={type} onClick={onClick}>
            {text}
        </ButtonStytled>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
