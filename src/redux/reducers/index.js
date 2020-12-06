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

        case actionTypes.ADD_TASK_ITEM: {
            const _tasks = [...state.tasks];
            const {
                id,
                status,
                title,
                text,
                label
            } = action.payload;
            _tasks.push({ id, status, title, text, label });
            return { ...state, tasks: _tasks }
        }

        case actionTypes.UPDATE_TASK_ITEM: {
            const _tasks = [...state.tasks];
            const idx = _tasks.findIndex(task => task.id === action.payload.id);
            _tasks[idx].status = action.payload.status;
            _tasks[idx].title = action.payload.title;
            _tasks[idx].text = action.payload.text;
            _tasks[idx].label = action.payload.label;
            return { ...state, tasks: _tasks }
        }

        case actionTypes.DELETE_TASK_ITEM: {
            const filteredTasks = state.stickyNotes.filter(task => {
                return task.id !== action.payload.id;
            });
            return { ...state, tasks: filteredTasks }
        }

        case actionTypes.HANDLE_ERROR: {
            return { ...state, error: action.payload.isError }
        }

        default: return state;
    }
};

export default reducer;
