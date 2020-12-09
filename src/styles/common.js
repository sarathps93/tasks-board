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

export const Label = styled.label`
    & strong {
        font-weight: 600;
    }
`;

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
    position: relative;
    & img {
        position: absolute;
        right: 0;
        top: 0;
        margin: 10px;
        cursor: pointer;
    }
`;

export const Submit = styled.button`
    width: 100px;
    border: var(--border);
    background-color: ${props => props.disabled ? 'var(--border-color)' : '#365C7D'};
    border-radius: 24px;
    padding: 6px;
    text-align: center;
    color: ${props => !props.disabled && 'var(--white)'};
    font: inherit;
    outline: none;
    cursor: ${props => !props.disabled && 'pointer'};
    margin-right: 12px;
`;

export const Close = styled(StyledAnchor)`
    font-size: 12px;
    font-weight: bold;
    text-decoration: underline;
    border: none;
    margin-top: 12px;
    margin-left: 12px;
    background-color: var(--white);
    margin: 0;
    font: inherit;
    outline: none;
    cursor: pointer;
`;

export const Hr = styled.hr`
    opacity: 0.6;
    margin: 14px 0;
`;

export const ScrollableDiv = styled.div`
    max-height: 47vh;
    overflow: scroll;
`;