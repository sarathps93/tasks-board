import { useSelector, useDispatch } from 'react-redux';

import { requestTaksModification, renderPortal } from '../../redux/actions';
import {
    Container,
    TaskBoard,
    TaskSection,
    Circle,
    TaskCards,
    TaskColor,
    PriorityCircle,
    TaskTitle,
    TaskLabel,
    TaskTitleContainer,
    TaskId
} from './styled';
import { FlexWithVerticalAlign, Hr, ScrollableDiv } from '../../styles/common';
import RenderStickyNotes from './RenderStickyNotes';
import contents from '../../contents';
import { preventDefault, getTaskId } from '../../utils/appUtils';
import CloseSVG from '../../assets/svgs/close.svg';

const LandingPage = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const editTask = (id, status) => {
        dispatch(renderPortal(
            { component: 'tasks', userAction: 'update', id, status }
        ));
    }

    const onDropEvent = (e, sectionId) => {
       const taskId = +e.dataTransfer.getData('taskId');
       const prevStatus = e.dataTransfer.getData('prevStatus');
       const currentStatus = sectionId ?? e.target.id;
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

    const scrollableDivDrop = (e, sectionId) => {
        e.preventDefault();
        e.stopPropagation();
        onDropEvent(e, sectionId)
    }

    const deleteTask = (e, id, status) => {
        e.stopPropagation();
        dispatch(requestTaksModification({
            id,
            type: 'delete',
            status
        }))
    }

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
                        <ScrollableDiv
                            onDragOver={preventDefault}
                            onDrop={(e) => scrollableDivDrop(e, section.id)}
                        >
                            {state.tasks[section.id].map(task => (    
                                <TaskCards
                                    key={task.id}
                                    id={task.id}
                                    onClick={() => editTask(task.id, section.label)}
                                    draggable
                                    onDragStart={(e) => onDragStart(e, section.id)}
                                >   
                                    <img
                                        src={CloseSVG}
                                        alt="close"
                                        onClick={(e) => deleteTask(e, task.id, section.id)}
                                    />
                                    <TaskColor section={section.id} />
                                    <TaskId>#{getTaskId(task.id)}</TaskId>
                                    <TaskTitleContainer>
                                        <PriorityCircle priority={task.priority} />
                                        <TaskTitle>{task.title}</TaskTitle>
                                    </TaskTitleContainer>
                                    <TaskLabel>{task.label}</TaskLabel>
                                </TaskCards>
                            ))}
                        </ScrollableDiv>
                    </TaskSection>
                ))}
                <RenderStickyNotes />
            </TaskBoard>
        </Container>
    )
};

export default LandingPage;
