import styled from "@emotion/styled";

export const SearchbarContainer = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const ruler = 16;
const colorShadow = "#BDC1C6";
const colorWhite = "#FFFFFF";
const colorBg = "#F7F8FA";

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
    color: ${(props) => (props.error ? "red" : colorShadow)};
    margin-top: ${(props) => (props.error ? "10px" : 0)};
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

export const InputName = styled.input`
    margin-right: ${ruler / 2}px;
    box-shadow: inset 2px 2px 5px ${colorShadow},
        inset -5px -5px 10px ${colorWhite};
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
        box-shadow: inset 1px 1px 2px ${colorShadow},
            inset -1px -1px 2px ${colorWhite};
    }
`;

export const List = styled.ul`
    font-size: ${ruler * 1.2}px;
    margin-top: 20px;
    font-weight: 400;
    color: ${colorShadow};
`;
