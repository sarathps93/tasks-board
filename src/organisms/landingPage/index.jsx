import { useSelector } from 'react-redux';
import {
    Container,
    TaskBoard,
    TaskSection,
    Circle,
} from './styled';
import { FlexWithVerticalAlign } from '../../styles/common';
import RenderStickyNotes from './RenderStickyNotes';

const LandingPage = () => {
    const state = useSelector(state => state);
    return (
        <Container>
            <TaskBoard>
                <TaskSection>
                    <FlexWithVerticalAlign>
                        <Circle>{state.tasks.todo.length}</Circle>
                        <span>To Do</span>
                    </FlexWithVerticalAlign>
                </TaskSection>
                <TaskSection>
                    <FlexWithVerticalAlign>
                        <Circle>{state.tasks.inProgress.length}</Circle>
                        <span>In Progress</span>
                    </FlexWithVerticalAlign>
                </TaskSection>
                <TaskSection>
                    <FlexWithVerticalAlign>
                        <Circle>{state.tasks.done.length}</Circle>
                        <span>Done</span>
                    </FlexWithVerticalAlign>
                </TaskSection>
                <RenderStickyNotes />
            </TaskBoard>
        </Container>
    )
};

export default LandingPage;
