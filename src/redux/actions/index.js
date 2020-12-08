import actionTypes from './actionTypes';
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


export const addTaskItem = ({ id, status, title, text, label }) => ({
    type: action.ADD_TASK_ITEM,
    payload: {
        id,
        status,
        title,
        text,
        label
    }
});

export const updateTaskItem = ({ id, status, title, text, label }) => ({
    type: action.ADD_TASK_ITEM,
    payload: {
        id,
        status,
        title,
        text,
        label
    }
});

export const deleteTaskItem = ({ id }) => ({
    type: action.DELETE_TASK_ITEM,
    payload: {
        id
    }
});

export const handleError = ({ isError }) => ({
    type: action.ERROR_OCCURRED,
    payload: {
        isError
    }
});

export const renderPortal = ({ component, userAction = 'add', id }) => ({
    type: action.RENDER_PORTAL,
    payload: {
        component,
        userAction,
        id
    }
});

export const closePortal = () => ({
    type: action.CLOSE_PORTAL
})
