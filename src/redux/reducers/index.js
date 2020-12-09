import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_ALL_DETAILS: {
            const { basicDetails, stickyNotes, tasks } = action.payload;
            return {
                ...state,
                basicDetails: basicDetails ?? state.basicDetails,
                stickyNotes: stickyNotes ?? state.stickyNotes,
                tasks: tasks ?? state.tasks
            }
        }

        case actionTypes.UPDATE_BASIC_DETAILS: {
            const { name, dashboardName } = action.payload;
            return { ...state, basicDetails: { name, dashboardName } }
        }

        case actionTypes.UPDATE_STICKY_NOTES: {
            return { ...state, stickyNotes: action.payload }
        }

        case actionTypes.UPDATE_TASKS: {
            return { ...state, tasks: action.payload }
        }

        case actionTypes.HANDLE_ERROR: {
            return { ...state, error: action.payload.isError }
        }

        case actionTypes.RENDER_PORTAL: {
            return {
                ...state,
                renderPortal: {
                    component: action.payload.component,
                    userAction: action.payload.userAction,
                    id: action.payload.id,
                    status: action.payload.status
                }
            }
        }

        case actionTypes.CLOSE_PORTAL: {
            return { ...state, renderPortal: false }
        }

        default: return state;
    }
};

export default reducer;
