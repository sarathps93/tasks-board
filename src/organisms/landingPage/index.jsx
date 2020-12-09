import { useSelector, useDispatch } from 'react-redux';

import { requestTaksModification, renderPortal } from '../../redux/actions';
import {
    Container,
    TaskBoard,
    TaskSection,
    Circle,
    TaskCards
} from './styled';
import { FlexWithVerticalAlign, Hr, ScrollableDiv } from '../../styles/common';
import RenderStickyNotes from './RenderStickyNotes';
import contents from '../../contents';
import { preventDefault } from '../../utils/appUtils';

const LandingPage = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const editTask = (e, status) => {
        dispatch(renderPortal(
            { component: 'tasks', userAction: 'update', id: e.target.id, status }
        ));
    }

    const onDropEvent = (e) => {
       const taskId = +e.dataTransfer.getData('taskId');
       const prevStatus = e.dataTransfer.getData('prevStatus');
       const currentStatus = e.target.id;
       const taskDetails = state.tasks[prevStatus].find(task => task.id === taskId);
       dispatch(requestTaksModification({
           ...taskDetails,
           status: currentStatus,
           type: 'update'
       }))
    };

    const onDragStart = (e, prevStatus) => {
        e.dataTransfer.setData('taskId', e.target.id);
        e.dataTransfer.setData('prevStatus', prevStatus);
    };

    return (
        <Container>
            <TaskBoard>
                {contents.status.map(section => (
                    <TaskSection
                        key={section.id}
                        id={section.id}
                        onDrop={onDropEvent}
                        onDragOver={preventDefault}
                    >
                        <FlexWithVerticalAlign>
                            <Circle>{state.tasks[section.id].length}</Circle>
                            <span>{section.label}</span>
                        </FlexWithVerticalAlign>
                        <Hr />
                        {state.tasks[section.id].map(task => (
                            <ScrollableDiv key={task.id}>
                                <TaskCards
                                    id={task.id}
                                    onClick={(e) => editTask(e, section.label)}
                                    draggable
                                    onDragStart={(e) => onDragStart(e, section.id)}
                                >
                                    {task.title}
                                </TaskCards>
                            </ScrollableDiv>
                        ))}
                    </TaskSection>
                ))}
                <RenderStickyNotes />
            </TaskBoard>
        </Container>
    )
};

export default LandingPage;
