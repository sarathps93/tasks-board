import action from './actionTypes';

export const getAllDetails = () => ({
    type: action.GET_ALL_DETAILS,
});

export const updateAllDetails = (payload) => ({
    type: action.UPDATE_ALL_DETAILS,
    payload
});

export const requestUpdateBasicDetails = ({ name, dashboardName }) => ({
    type: action.REQUEST_UPDATE_BASIC_DETAILS,
    payload: {
        name,
        dashboardName
    }
});

export const updateBasicDetails = ({ name, dashboardName }) => ({
    type: action.UPDATE_BASIC_DETAILS,
    payload: {
        name,
        dashboardName
    }
});

export const requestStickyNoteModification = (payload) => ({
    type: action.STICKY_NOTE_MODIFICATION,
    payload
})

export const updateStickyNotes = (payload) => ({
    type: action.UPDATE_STICKY_NOTES,
    payload
});

export const requestTaksModification = (payload) => ({
    type: action.TASKS_MODIFICATION,
    payload
});

export const updateTaks = (payload) => ({
    type: action.UPDATE_TASKS,
    payload
})

export const handleError = ({ isError }) => ({
    type: action.ERROR_OCCURRED,
    payload: {
        isError
    }
});

export const renderPortal = ({ component, userAction = 'add', id, status = 'todo' }) => ({
    type: action.RENDER_PORTAL,
    payload: {
        component,
        userAction,
        id,
        status
    }
});

export const closePortal = () => ({
    type: action.CLOSE_PORTAL
})
