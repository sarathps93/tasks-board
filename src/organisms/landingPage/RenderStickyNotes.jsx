import { useSelector, useDispatch } from 'react-redux';
import {
    StickyNoteSection,
    Circle,
    PriorityCircle,
    StickyPriority,
    StickyCards
} from './styled';
import { FlexWithVerticalAlign, Hr, ScrollableDiv } from '../../styles/common';
import { requestStickyNoteModification, renderPortal } from '../../redux/actions';
import CloseSVG from '../../assets/svgs/close.svg';

const RenderStickyNotes = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const priorityLevels = ['High', 'Medium', 'Low'];

    const editStickyNote = (e) => {
        dispatch(renderPortal(
            { component: 'sticky', userAction: 'update', id: e.target.id }
        ));
    }

    const deleteStickyNote = (e) => {
        e.stopPropagation();
        dispatch(requestStickyNoteModification({
            type: 'delete',
            id: e.target.offsetParent.id
        }))
    };

    return (
        <StickyNoteSection>
            <FlexWithVerticalAlign>
                <Circle>{state.stickyNotes.length}</Circle>
                <span>Sticky Notes</span>
            </FlexWithVerticalAlign>
            <Hr style={{ marginBottom: 0 }} />
            <StickyPriority>
                {priorityLevels.map(p => (
                    <FlexWithVerticalAlign key={p}>
                        <PriorityCircle priority={p} />
                        <span>{p} priority</span>
                    </FlexWithVerticalAlign>
                ))}
            </StickyPriority>
            <ScrollableDiv>
                {state.stickyNotes?.map(sticky => (
                    <StickyCards
                        key={sticky.id}
                        id={sticky.id}
                        priority={sticky.priority}
                        onClick={editStickyNote}
                    >
                        {sticky.text}
                        <img src={CloseSVG} alt="close" onClick={deleteStickyNote} />
                    </StickyCards>
                ))}
            </ScrollableDiv>
        </StickyNoteSection>
    )
};

export default RenderStickyNotes;
