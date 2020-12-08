import { useSelector, useDispatch } from 'react-redux';
import {
    StickyNoteSection,
    Circle,
    PriorityCircle,
    StickyPriority,
    StickyCards,
    ScrollableDiv,
    Hr
} from './styled';
import { FlexWithVerticalAlign } from '../../styles/common';
import { requestStickyNoteModification, renderPortal } from '../../redux/actions';
import { debounce } from '../../utils/appUtils';

const RenderStickyNotes = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const priorityLevels = ['High', 'Medium', 'Low'];

    const editStickyNote = (e) => {
        dispatch(renderPortal(
            { component: 'sticky', userAction: 'update', id: e.target.id }
        ));
    }

    return (
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
            <Hr />
            <ScrollableDiv>
                {state.stickyNotes.map(sticky => (
                    <StickyCards key={sticky.id} priority={sticky.priority} onClick={editStickyNote}>
                        <div id={sticky.id}>
                            {sticky.text}
                        </div>
                    </StickyCards>
                ))}
            </ScrollableDiv>
        </StickyNoteSection>
    )
};

export default RenderStickyNotes;
