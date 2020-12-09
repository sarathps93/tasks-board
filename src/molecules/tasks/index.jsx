import { useState, useLayoutEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestTaksModification } from '../../redux/actions';

import {
    StyledInput,
    Label,
    Hr
} from '../../styles/common';
import { Container, StyledDropdown, DropDownContainer } from './styled';
import { stopImmediatePropagation } from '../../utils/appUtils';
import contents from '../../contents';
import { statusIdMap, idStatusMap } from '../../constants';
import SubmitClose from '../submitClose';


const Tasks = ({ closePortal }) => {
    const [details, setDetails] = useState({
        title: '',
        label: ''
    });
    const [priority, setPriority] = useState('High');
    const [status, setStatus] = useState('To Do');
    const inputRef = createRef('');

    const state = useSelector(state => state);
    const { userAction } = state.renderPortal || {};
    const dispatch = useDispatch();
    const shouldEnableSubmit = Object.keys(details).every(key => !!details[key]);

    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value })
    };

    const onFormSubmission = (e) => {
        e.preventDefault();
        const { title, label } = details;
        if(shouldEnableSubmit) {
            dispatch(requestTaksModification({
                id: state.renderPortal?.id,
                title,
                label,
                priority,
                status: statusIdMap[status],
                type: userAction
            }));
            closePortal();
        };
    }

    useLayoutEffect(() => {
        if(userAction === 'update') {
            const renderedTaskId = Number(state.renderPortal.id);
            const status = statusIdMap[state.renderPortal.status];
            const task = state.tasks[status].find(
                _task => _task.id === renderedTaskId
            );
            if(task) {
                const { title, label, priority, status: _status } = task;
                setDetails({ ...details, title, label });
                setStatus(idStatusMap[_status]);
                setPriority(priority);
            }
        } else {
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
    }, []);

    return (
        <Container onClick={stopImmediatePropagation} as="form" onSubmit={onFormSubmission}>
            <Label>
                <span>{userAction === 'add' ? 'Add a task' : 'Update the task'}</span>
            </Label>
            <Label htmlFor="title">
                <strong>Title</strong>
                <StyledInput
                    autoComplete="off"
                    id="title"
                    value={details.title}
                    onChange={handleOnChange}
                    ref={inputRef}
                />
            </Label>
            <Label htmlFor="label">
                <strong>Label</strong>
                <StyledInput
                    autoComplete="off"
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
            <Hr />
            <SubmitClose isDisabled={!shouldEnableSubmit} onClose={closePortal} />
        </Container>
    )
};

export default Tasks;
