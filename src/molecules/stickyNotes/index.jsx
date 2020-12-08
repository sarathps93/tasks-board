import { useState, useLayoutEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStickyNoteModification } from '../../redux/actions';
import { Label } from '../../styles/common';
import {
    StickyTextContainer,
    StickyText,
    SubmitContainer,
    Submit,
    Instruction
} from './styled';
import contents from '../../contents';
import { stopImmediatePropagation } from '../../utils/appUtils';
import DropDown from '../dropdown';

const StickyNotes = ({ closePortal }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('High');
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { userAction } = state.renderPortal || {};

    const inputRef = createRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            dispatch(requestStickyNoteModification({
                type: userAction,
                text, priority,
                id: state.renderPortal.id
            }))
            closePortal();
        }
    }

    useLayoutEffect(() => {
        if(userAction === 'update') {
            const renderedStickyId = Number(state.renderPortal.id);
            const sticky = state.stickyNotes.find(
                _sticky => _sticky.id === renderedStickyId
            );
            if(sticky) {
                setText(sticky.text);
                setPriority(sticky.priority);
            }
        } else {
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
    }, []);

    return (
        <StickyTextContainer
            as="form"
            onClick={stopImmediatePropagation}
            onSubmit={handleSubmit}
        >
            <Label>
                <span>{userAction === 'add' ? 'Add a sticky note for you' : 'Update the sticky note'}</span>
                <Instruction>Click outside to cancel</Instruction>
                <StickyText
                    ref={inputRef}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <SubmitContainer>
                    <DropDown
                        label="Priority"
                        value={priority}
                        setValue={setPriority}
                        contents={contents.priority}
                    />
                    <Submit as="button" type="submit">+</Submit>
                </SubmitContainer>
            </Label>
        </StickyTextContainer>
    )
};

export default StickyNotes;
