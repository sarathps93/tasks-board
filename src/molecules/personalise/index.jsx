import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestUpdateBasicDetails } from '../../redux/actions';

import {
    StyledInput,
    Label,
    PortalContainer,
} from '../../styles/common';
import { stopImmediatePropagation } from '../../utils/appUtils';
import SubmitClose from '../submitClose';

const Personalise = ({ closePortal }) => {
    const [details, setDetails] = useState({
        name: '',
        dashboardName: ''
    });
    const dispatch = useDispatch();
    const shouldEnableSubmit = Object.keys(details).every(key => !!details[key]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(shouldEnableSubmit) {
            const { name, dashboardName } = details;
            dispatch(requestUpdateBasicDetails({ name, dashboardName }));
            closePortal();
        }
    };

    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value })
    };

    return (
        <PortalContainer onClick={stopImmediatePropagation} onSubmit={handleSubmit} as="form">
            <Label htmlFor="name">
                <strong>Your Name</strong>
                <StyledInput
                    autoComplete="off"
                    id="name"
                    value={details.name}
                    onChange={handleOnChange}
                />
            </Label>
            <Label htmlFor="dashboard Name">
                <strong>Dashboard Name</strong>
                <StyledInput
                    autoComplete="off"
                    id="dashboardName"
                    value={details.dashboardName}
                    onChange={handleOnChange}
                />
            </Label>
            <SubmitClose isDisabled={!shouldEnableSubmit} onClose={closePortal} />
        </PortalContainer>
    )
};

export default Personalise;
