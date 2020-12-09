const constants = Object.freeze({
    NAME: 'name',
    DASHBOARD_NAME: 'dashboardName',
    STICKY_NOTES: 'stickyNotes',
    TASKS: 'tasks'
});

export const statusIdMap = Object.freeze({
    'To Do': 'todo',
    'In Progress': 'inProgress',
    Done: 'done'
});

export const idStatusMap = Object.freeze({
    'todo': 'To Do',
    'inProgress': 'In Progress',
    done: 'Done'
});


export default constants;

