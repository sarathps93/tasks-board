import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestUpdateBasicDetails } from '../../redux/actions';

import {
    StyledInput,
    Label,
    PortalContainer,
    Submit,
    Close
} from '../../styles/common';
import { stopImmediatePropagation } from '../../utils/appUtils';

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
                Your Name
                <StyledInput
                    id="name"
                    value={details.name}
                    onChange={handleOnChange}
                />
            </Label>
            <Label htmlFor="dashboard Name">
                Dashboard Name
                <StyledInput
                    id="dashboardName"
                    value={details.dashboardName}
                    onChange={handleOnChange}
                />
            </Label>
            <Submit
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
        </PortalContainer>
    )
};

export default Personalise;
