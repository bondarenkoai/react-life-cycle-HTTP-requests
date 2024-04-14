import styled from '@emotion/styled';

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

export const Text = styled.p`
    fontsize: 18px;
    font-weight: 500;
`;
