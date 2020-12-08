const initialState = {
    basicDetails: {
        name: '',
        dashboardName: ''
    },
    stickyNotes: [],
    tasks: {
        todo: [],
        inProgress: [],
        done: []
    },
    error: false,
    renderPortal: false,
}

export default initialState;
