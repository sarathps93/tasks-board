import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    StyledInput,
    Label,
    Submit,
    Close,
} from '../../styles/common';
import { Container, StyledDropdown, DropDownContainer } from './styled';
import { stopImmediatePropagation } from '../../utils/appUtils';
import contents from '../../contents';

const Tasks = ({ closePortal }) => {
    const [details, setDetails] = useState({
        title: '',
        label: ''
    });
    const [priority, setPriority] = useState('High');
    const [status, setStatus] = useState('To Do');

    const state = useSelector(state => state);
    const { userAction } = state.renderPortal || {};
    const dispatch = useDispatch();
    const shouldEnableSubmit = Object.keys(details).every(key => !!details[key]);

    console.log(details)

    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value })
    };

    return (
        <Container onClick={stopImmediatePropagation} as="form">
            <Label>
                <span>{userAction === 'add' ? 'Add a task' : 'Update the task'}</span>
            </Label>
            <Label htmlFor="title">
                Title
                <StyledInput
                    id="title"
                    value={details.title}
                    onChange={handleOnChange}
                />
            </Label>
            <Label htmlFor="label">
                Label
                <StyledInput
                    id="label"
                    value={details.label}
                    onChange={handleOnChange}
                />
            </Label>
            <DropDownContainer>
                <StyledDropdown
                    label="Priority"
                    contents={contents.priority}
                    value={priority}
                    setValue={setPriority}
                />
                <StyledDropdown
                    label="Status"
                    contents={contents.status}
                    value={status}
                    setValue={setStatus}
                />
            </DropDownContainer>
            <Submit
                color="#365C7D"
                disabled={!shouldEnableSubmit}
                type="submit"
            >
                Submit
            </Submit>
            <Close
                as="button"
                onClick={closePortal}
            >
                Close
            </Close>
        </Container>
    )
};

export default Tasks;
