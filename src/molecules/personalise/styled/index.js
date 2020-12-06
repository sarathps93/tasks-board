import styled from 'styled-components';
import { StyledAnchor, PortalContainer } from '../../../styles/common';

export const Container = styled(PortalContainer)`
`;

export const Submit = styled.button`
    width: 100px;
    border: var(--border);
    background-color: ${props => props.disabled ? 'var(--border-color)' : props.color};
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