import styled from "@emotion/styled";

export const ButtonStytled = styled.button`
    width: 100px;
    padding: 12px 24px;
    margin: 10px;
    font-size: 16px;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #ffa000, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background: linear-gradient(#5d5d5d, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, #ffa000, #40c9ff)
                border-box;
    }
`;
