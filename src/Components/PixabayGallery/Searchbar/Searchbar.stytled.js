import styled from "@emotion/styled";

export const SearchbarContainer = styled.header`
    width: 100%;
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background: linear-gradient(#5d5d5d, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #ffa000, #40c9ff) border-box;
`;

// export const FormInput = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;

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
    width: 300px;
    margin-bottom: ${ruler * 1.5}px;
    font-size: ${ruler * 1.4}px;
    font-weight: bold;
    color: ${colorShadow};
`;

export const InputName = styled.input`
    width: 60vw;
    margin-right: ${ruler / 2}px;
    box-shadow: inset 2px 2px 5px ${colorShadow},
        inset -5px -5px 10px ${colorWhite};
    padding: ${ruler}px;
    font-size: ${ruler}px;
    background: ${colorBg};
    color: #212121;
    border-radius: ${ruler / 2}px;
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
