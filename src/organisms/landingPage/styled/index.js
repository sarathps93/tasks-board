import styled from 'styled-components';
import { verticalAlign, Card } from '../../../styles/common';

export const Container = styled.div`
    width: 100%;
`;

export const TaskBoard = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 768px) {
        width: 1000px;
    }
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
    max-height: 140px;
    max-width: 300px;
    word-break: break-all;
    overflow: scroll;
    margin: 18px 0;
    cursor: pointer;
`;

export const TaskCards = styled(Card)`
    cursor: pointer;
    word-break: break-all;
`;

export const TaskColor = styled.div`
    background-color: ${props => `var(--task-${props.section})`};
    height: 3px;
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 100%;
`;

export const TaskTitleContainer = styled.div`
    position: relative;
    & div {
        position: absolute;
        top: 6px;
        left: 0;
    }
    & span {
        margin-left: 18px;
    }
`;

export const TaskTitle = styled.span`
    font-weight: 600;
    color: #0366d6;
    margin: 6px 0;
`;

export const TaskLabel = styled.div`
    background-color: #0366d6;
    max-width: fit-content;
    padding: 0 6px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 12px;
    margin: 12px 0;
`;

export const TaskId = styled.div`
    color: #586069;
    font-size: 14px;
    margin-bottom: 6px;
`;
