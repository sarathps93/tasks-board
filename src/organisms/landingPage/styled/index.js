import styled from 'styled-components';
import { verticalAlign } from '../../../styles/common';

export const Container = styled.div`
    width: 100%;
    margin-top: 290px;
`;

export const TaskBoard = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 500px;
    margin-top: 24px;
`;

export const TaskSection = styled.section`
    width: 25%;
    border: var(--border);
    margin-right: 12px;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0px 0px 5px grey;
`;

export const StickyNoteSection = styled(TaskSection)`
    margin-right: initial;
`;

export const Circle = styled.div`
    border-radius: 50%;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #6a737d;
    margin-right: 12px;
    color: var(--white);
    font-size: 14px;
    ${verticalAlign};
    justify-content: center;
`;

export const StickyPriority = styled.div`
    display: flex;
    margin-top: 12px;
    justify-content: space-evenly;
    & span {
        font-size: 12px;
    }
`;

export const PriorityCircle = styled(Circle)`
    width: 12px;
    height: 12px;
    margin-right: 6px;
    background-color: ${props => `var(--${props.priority.toLowerCase()}-priority)`};
`;
