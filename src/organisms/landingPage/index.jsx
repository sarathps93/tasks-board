import { useSelector } from 'react-redux';
import {
    Container,
    TaskBoard,
    TaskSection,
    StickyNoteSection,
    Circle,
    PriorityCircle,
    StickyPriority
} from './styled';
import { FlexWithVerticalAlign, Card } from '../../styles/common';

const RightPane = () => {
    const state = useSelector(state => state);
    const priorityLevels = ['High', 'Medium', 'Low']
    return (
        <Container className="sidepane_container">
            <hr />
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
                <StickyNoteSection>
                    <FlexWithVerticalAlign>
                        <Circle>{state.stickyNotes.length}</Circle>
                        <span>Sticky Notes</span>
                    </FlexWithVerticalAlign>
                    <StickyPriority>
                        {priorityLevels.map(p => (
                            <FlexWithVerticalAlign key={p}>
                                <PriorityCircle priority={p} />
                                <span>{p} priority</span>
                            </FlexWithVerticalAlign>
                        ))}
                    </StickyPriority>
                    <div>
                        {state.stickyNotes.map(sticky => (
                            <Card key={sticky.id}>
                                <div>{sticky.priority}</div>
                                <div>{sticky.text}</div>
                            </Card>
                        ))}
                    </div>
                </StickyNoteSection>
            </TaskBoard>
        </Container>
    )
};

export default RightPane;
