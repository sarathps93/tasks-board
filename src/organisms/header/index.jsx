import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Personalise,
    FlexContainer,
    MessageContainer,
    WelcomeMessage,
    Message,
    Warning,
    ChartContainer
} from './styled';
import {
    Portal,
    PersonaliseForm,
} from '../../molecules';
import { PieChart, StickyNotes } from '../../molecules';

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
        Component: StickyNotes
    },
};

const Header = () => {
    const [renderPortal, setRenderPortal] = useState(false);
    const userDetails = useSelector(state => state.basicDetails);
    const portalConditionalDisplay = (e) => {
        setRenderPortal(e.target.id);
    }
    const PortalComponent = components[renderPortal]?.Component;
    return (
        <>
            <Container>
                {Object.keys(components).map((id)=> (
                    <Personalise id={id} key={id} onClick={portalConditionalDisplay}>
                        {components[id].label}
                    </Personalise>
                ))}
                {renderPortal && (
                    <Portal setPortal={setRenderPortal}>
                        <PortalComponent setPortal={setRenderPortal} />                       
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
        </>
    )
};

export default Header;
