import styled from '@emotion/styled';

export const Label = styled.label`
    font-size: 24px;
    font-weight: 600;
    color: #595959;
`;

export const InputName = styled.input`
    margin: 20px auto;
    height: 50px;
    padding-left: 45px;
    outline: none;
    border: none;
    font-size: 18px;
    background: #dde1e7;
    color: #595959;
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;

    &:focus {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73;
    }
`;

export const Button = styled.button`
    margin: 15px 0;
    height: 50px;
    width: 100%;
    font-size: 18px;
    line-height: 50px;
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
