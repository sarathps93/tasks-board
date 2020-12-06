import styled from 'styled-components';
import { verticalAlign } from '../../../styles/common';

export const Container = styled.header`
    width: 100%;
    height: 52px;
    background-color: var(--scale-black);
    ${verticalAlign};
    position: fixed;
    top: 0;
    z-index: 9999;
    padding: 24px;
    justify-content: space-evenly;
    z-index: 9999;
`;

export const Personalise = styled.button`
    background: none;
    border: none;
    font: inherit;
    font-weight: bold;
    color: var(--white);
    cursor: pointer;
`;

export const FlexContainer = styled.div`
    position: fixed;
    top: 52px;
    padding: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 9999;
`;

export const MessageContainer = styled.div`

`;

export const WelcomeMessage = styled.div`
    color: #6b778c;
`;

export const Message = styled.div`
    color: #172b4d;
    font-size: 24px;
`;

export const Warning = styled.div`
    margin: 12px 0;
    padding: 12px;
    background-color: var(--warning);
`;


export const ChartContainer = styled.div`
    height: 200px;
    width: 50%;
`;