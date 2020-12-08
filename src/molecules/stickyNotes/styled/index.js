import styled from 'styled-components';
import { TextArea, verticalAlign, PortalContainer } from '../../../styles/common';

export const StickyTextContainer = styled(PortalContainer)`
    text-align: center;
    & span {
        font-weight: bold;
    }
`;

export const StickyText = styled(TextArea)`
    width: 100%;
    margin: auto;
    margin-top: 12px;
`;

export const SubmitContainer = styled.div`
    width: 100%;
    margin: auto;
    background-color: var(--green-dark);
    border-radius: 0 0 12px 12px;
    height: 40px;
    ${verticalAlign};
    justify-content: flex-end;
    padding: 18px
`;

export const Submit = styled.span`
    position: absolute;
    transform: translate(0, -40px);
    background-color: var(--green);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: var(--white);
    border: none;
`;

export const Instruction = styled.div`
    font-size: 14px;
    opacity: 0.6;
    font-style: italic;
`;

