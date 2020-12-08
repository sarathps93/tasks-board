import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestUpdateBasicDetails } from '../../redux/actions';

import { Container, Submit, Close } from './styled';
import { StyledInput, Label } from '../../styles/common';

const Personalise = ({ closePortal }) => {
    const [details, setDetails] = useState({
        name: '',
        dashboardName: ''
    });
    const dispatch = useDispatch();

    const stopImmediatePropagation = (e) => e.nativeEvent.stopImmediatePropagation();
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

    useEffect(() => {
        (async () => {
            // const name = await get(constants.NAME);
            // const dashboardName = await get(constants.DASHBOARD_NAME);
            // if(name && dashboardName) setDetails({ ...details, name, dashboardName });
        })();
    }, [])

    return (
        <Container onClick={stopImmediatePropagation} onSubmit={handleSubmit} as="form">
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

export default Personalise;
