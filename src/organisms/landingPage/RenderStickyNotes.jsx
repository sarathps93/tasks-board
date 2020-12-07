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
import { requestStickyNoteModification } from '../../redux/actions';
import { debounce } from '../../utils/appUtils';

const RenderStickyNotes = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const priorityLevels = ['High', 'Medium', 'Low'];

    const handleEditableContent = (e) => {
        console.log(e.target.innerHTML)
        debounce(
            dispatch(
                requestStickyNoteModification({
                    type: 'update',
                    text: e.target.innerHTML,
                    id: e.target.id
                })
            ),
            3000
        );
    };

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
                    <StickyCards key={sticky.id} priority={sticky.priority}>
                        <div
                            contentEditable
                            id={sticky.id}
                            onInput={handleEditableContent}
                        >
                            {sticky.text}
                        </div>
                    </StickyCards>
                ))}
            </ScrollableDiv>
        </StickyNoteSection>
    )
};

export default RenderStickyNotes;
