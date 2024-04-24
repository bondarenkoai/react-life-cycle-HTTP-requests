import PropTypes from 'prop-types';
import { ButtonStytled } from './Button.stytled';

export const Button = ({ value, type }) => {
    return <ButtonStytled type={type}>{value}</ButtonStytled>;
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
