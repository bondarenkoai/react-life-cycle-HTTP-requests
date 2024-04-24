import styled from '@emotion/styled';

export const ButtonStytled = styled.button`
    width: 130px;
    padding: 12px 24px;
    margin: 10px;
    font-size: 16px;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #ffa000, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        transform: scale(1.05);
        background: linear-gradient(#5d5d5d, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, #ffa000, #40c9ff) border-box;
    }
`;
