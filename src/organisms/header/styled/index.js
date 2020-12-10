import styled from 'styled-components';
import { verticalAlign } from '../../../styles/common';

export const TopSection = styled.section`
`;

export const Container = styled.header`
    width: 100%;
    height: 52px;
    position: fixed;
    top: 0;
    background-color: var(--scale-black);
    ${verticalAlign};
    z-index: 9999;
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
    padding: 24px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 9999;
    margin-top: 52px;
    @media(max-width: 767px) {
        display: block
    }
`;

export const MessageContainer = styled.div`
    @media(max-width: 1230px) {
        overflow: scroll;
        width: 80%
    }
    @media(max-width: 930px) {
        overflow: scroll;
        width: 58%
    }
    @media(max-width: 767px) {
        width: 100%;
        margin: auto;
    }
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
    @media(max-width: 767px) {
        width: 100%
    }
    @media(min-width: 768px) {
        transform: translate(0, 50px);
    }
    @media(min-width: 1000px) {
        transform: translate(0, 10px);
    }
`;