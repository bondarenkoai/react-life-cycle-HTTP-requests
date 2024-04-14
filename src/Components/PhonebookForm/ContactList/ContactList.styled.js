import styled from '@emotion/styled';

export const ContactListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.ul`
    font-size: 18px;
    font-weight: 400;
    color: #595959;
`;

export const Button = styled.button`
    margin: 10px 0;
    height: 25px;
    width: 70px;
    font-size: 12px;
    font-weight: 600;
    background: #dde1e7;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #595959;
    box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;

    &:focus {
        color: #3498db;
        box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
    }
`;
