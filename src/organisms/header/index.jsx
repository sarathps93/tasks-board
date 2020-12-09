import { useSelector, useDispatch } from 'react-redux';
import {
    TopSection,
    Container,
    Personalise,
    FlexContainer,
    MessageContainer,
    WelcomeMessage,
    Message,
    Warning,
    ChartContainer
} from './styled';
import { Hr } from '../../styles/common';
import {
    Portal,
    PersonaliseForm,
    PieChart,
    StickyNotes,
    Tasks
} from '../../molecules';
import { renderPortal as setRenderPortal, closePortal } from '../../redux/actions';

const components = {
    personalise: {
        label: 'Personalise',
        Component: PersonaliseForm
    },
    sticky: {
        label: 'Add a note',
        Component: StickyNotes
    },
    tasks: {
        label: 'Add a task',
        Component: Tasks
    },
};

const Header = () => {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.basicDetails);
    const renderPortal = useSelector(state => state.renderPortal);

    const _closePortal = () => dispatch(closePortal());

    const portalConditionalDisplay = (e) => {
        dispatch(setRenderPortal({ component: e.target.id, userAction: 'add' }));
    }
    const PortalComponent = components[renderPortal?.component]?.Component;
    return (
        <TopSection>
            <Container>
                {Object.keys(components).map((id)=> (
                    <Personalise id={id} key={id} onClick={portalConditionalDisplay}>
                        {components[id].label}
                    </Personalise>
                ))}
                {renderPortal && (
                    <Portal closePortal={_closePortal}>
                        <PortalComponent closePortal={_closePortal} />                       
                    </Portal>
                )}
            </Container>
            <FlexContainer>
                <MessageContainer>
                <WelcomeMessage>
                    {`Welcome ${userDetails.name ? userDetails.name : 'Guest'}`}
                </WelcomeMessage>
                <Message>
                    {`${userDetails.dashboardName ? userDetails.dashboardName : 'Your dashboard'}`}
                </Message>
                <Warning>
                    This is a serverless progressive web application.
                    It works utilising your browser's IndexedDB storage.
                    It lets you to continue your work even when you are offline.
                    <br />
                    If you clear the data from your browser, all the saved data will be lost.
                    Also your saved data won't get reflected if you open this application in incognito mode or in any other browser than your usual one.
                    <br /> 
                    To know more about IndexedDB, click <a href="https://developers.google.com/web/ilt/pwa/working-with-indexeddb">here</a> 
                </Warning>
                </MessageContainer>
                <ChartContainer >
                    <PieChart />
                </ChartContainer>
            </FlexContainer>
            <Hr />     
        </TopSection>
    )
};

export default Header;
