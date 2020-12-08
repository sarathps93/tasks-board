import styled from 'styled-components';
import { verticalAlign, Card } from '../../../styles/common';

export const Container = styled.div`
    width: 100%;
    height: 50vh;
`;

export const TaskBoard = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
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

export const ColoredLine = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const PriorityCircle = styled(Circle)`
    width: 12px;
    height: 12px;
    margin-right: 6px;
    background-color: ${props => `var(--${props.priority.toLowerCase()}-priority)`};
`;

export const StickyCards = styled(Card)`
    background-color: ${props => props.priority && `var(--${props.priority.toLowerCase()}-priority)`};
    color: ${props => props.priority === 'High' && 'white'};
    min-height: 80px;
    max-height: 200px;
    overflow: scroll;
    margin: 18px 0;
    cursor: pointer;
`;

export const ScrollableDiv = styled.div`
    max-height: 47vh;
    overflow: scroll;
    margin-top; 12px;
`;

export const Hr = styled.hr`
    opacity: 0.6;
`;
