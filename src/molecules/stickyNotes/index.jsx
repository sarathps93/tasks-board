import { useState, useLayoutEffect, createRef } from 'react';
import { useDispatch } from 'react-redux';
import { requestStickyNoteModification } from '../../redux/actions';
import { Label } from '../../styles/common';
import {
    StickyTextContainer,
    StickyText,
    PriorityDropdown,
    SubmitContainer,
    Submit,
    Instruction
} from './styled';
import contents from '../../contents';

const StickyNotes = ({ closePortal }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('High');
    const dispatch = useDispatch();

    const inputRef = createRef('');
    const stopImmediatePropagation = (e) => e.nativeEvent.stopImmediatePropagation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            dispatch(requestStickyNoteModification({ type: 'add', text, priority }))
            closePortal();
        }
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);  
    }, []);

    return (
        <StickyTextContainer
            as="form"
            onClick={stopImmediatePropagation}
            onSubmit={handleSubmit}
        >
            <Label>
                <span>Add a sticky note for you</span>
                <Instruction>Click outside to cancel</Instruction>
                <StickyText
                    ref={inputRef}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <SubmitContainer>
                    <Label style={{ color: 'var(--white)' }}>
                        Priority
                        <PriorityDropdown value={priority} onChange={e => setPriority(e.target.value)}>
                            {contents.priority.map(option => ( 
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </PriorityDropdown>
                    </Label>
                    <Submit as="button" type="submit">+</Submit>
                </SubmitContainer>
            </Label>
        </StickyTextContainer>
    )
};

export default StickyNotes;
