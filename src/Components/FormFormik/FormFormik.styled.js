import styled from '@emotion/styled';

const ruler = 16;
const colorShadow = '#BDC1C6';
const colorWhite = '#FFFFFF';
const colorBg = '#F7F8FA';
const colorRed = '#FF4E61';

export const PhonebookContainer = styled.div`
    width: ${ruler * 24}px;
    margin: 30px auto;
    padding: ${ruler * 2}px;
    background: ${colorBg};
    border-radius: ${ruler * 1.5}px;
    box-shadow: -5px -5px 20px ${colorWhite}, 5px 5px 20px ${colorShadow};
    font-family: Montserrat, sans-serif;
`;

export const Text = styled.h2`
    text-align: center;
    margin-bottom: ${ruler * 2}px;
    font-size: ${ruler * 2}px;
    font-weight: bold;
    color: ${colorShadow};
    text-shadow: 1px 1px 1px ${colorWhite};
`;

export const TextP = styled.p`
    font-size: ${ruler}px;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${colorShadow};
    text-shadow: 1px 1px 1px ${colorWhite};
    color: ${props => (props.error ? 'red' : colorShadow)};
    margin-top: ${props => (props.error ? '10px' : 0)};
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ruler * 1.5}px;
    width: 100%;
    font-size: ${ruler * 1.4}px;
    font-weight: bold;
    color: ${colorShadow};
`;

export const Button = styled.button`
    border: 0;
    outline: 0;
    font-size: ${ruler}px;
    border-radius: ${ruler * 20}px;
    padding: ${ruler}px;
    background-color: ${colorBg};
    color: ${colorShadow};
    font-weight: bold;
    box-shadow: -5px -5px 20px ${colorWhite}, 5px 5px 20px ${colorShadow};
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: -2px -2px 5px ${colorWhite}, 2px 2px 5px ${colorShadow};
    }

    &:active {
        box-shadow: inset 1px 1px 2px ${colorShadow}, inset -1px -1px 2px ${colorWhite};
    }
`;

export const InputName = styled.input`
    margin-right: ${ruler / 2}px;
    box-shadow: inset 2px 2px 5px ${colorShadow}, inset -5px -5px 10px ${colorWhite};
    width: 60%;
    padding: ${ruler}px;
    font-size: ${ruler}px;
    background: ${colorBg};
    color: ${colorShadow};
    border-radius: ${ruler * 20}px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;

    &:focus {
        box-shadow: inset 1px 1px 2px ${colorShadow}, inset -1px -1px 2px ${colorWhite};
    }
`;

export const ContactListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.ul`
    font-size: ${ruler * 1.2}px;
    margin-top: 20px;
    font-weight: 400;
    color: ${colorShadow};
`;

export const ButtonList = styled.button`
    margin: ${ruler / 2}px 0;
    height: ${ruler * 1.5}px;
    width: ${ruler * 5}px;
    font-size: ${ruler * 1}px;
    font-weight: bold;
    background: ${colorBg};
    border-radius: ${ruler * 20}px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${colorRed};
    box-shadow: 2px 2px 5px ${colorShadow}, -5px -5px 10px ${colorWhite};
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: -2px -2px 5px ${colorShadow}, 2px 2px 5px ${colorWhite};
    }

    &:focus {
        box-shadow: inset 2px 2px 5px ${colorShadow}, inset -5px -5px 10px ${colorWhite};
    }
`;
