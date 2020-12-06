import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    padding: 18px;
`;


export const StyledForm = styled.form`
    box-sizing: border-box;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    font: inherit;
    margin-top: 12px;
    margin-bottom: 18px;
    border-radius: 12px;
    border: var(--border);
    outline: none;
`;

export const Label = styled.label``;

export const TextArea = styled.textarea`
    display: block;
    margin-top: 12px;
    resize: none;
    width: 100%;
    height: 180px;
    font: inherit;
    padding: 12px;
    border-radius: 12px 12px 0 0;
    border: var(--border);
    outline: none;
`;

export const verticalAlign = css`
    display: flex;
    align-items: center;
`;

export const FlexWithVerticalAlign = styled.div`
    ${verticalAlign};
`;

export const StyledAnchor = styled.a`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
    font-size: 16px;
    color: var(--primary-color);
    span {
        margin-left: 6px
    }
`;

export const PortalContainer = styled.form`
    width: 50vmax;
    max-width: 100vw;
    height: fit-content;
    max-height: 100vh;
    background-color: var(--white);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 18px;
    padding: 18px;
    overflow: auto;
`;

export const Card = styled.div`
    width: 100%;
    background-color: var(--white);
    box-sizing: border-box;
    padding: 18px;
    margin: 6px 0;
    border: var(--border);
    border-radius: 12px;
`;