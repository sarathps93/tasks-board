import { put, takeLatest } from 'redux-saga/effects';
import { get, set } from 'idb-keyval';
import _ from 'lodash';

import * as actions from '../actions';
import constants from '../../constants';
import actionTypes from '../actions/actionTypes';

export function* getAllDetails() {
    try {
        const name = yield get(constants.NAME);
        const dashboardName = yield get(constants.DASHBOARD_NAME);
        const stickyNotes = yield get(constants.STICKY_NOTES);
        const tasks = yield get(constants.TASKS);

        yield put(actions.updateAllDetails({ 
            basicDetails: { name, dashboardName },
            stickyNotes,
            tasks
        }));
    } catch (error) {
        yield put(actions.handleError({ isError: true }));
    }
};

export function* updateBasicDetails({ payload }) {
    try {
        const { name, dashboardName } = payload;
        yield set(constants.NAME, name);
        yield set(constants.DASHBOARD_NAME, dashboardName);
        yield put(actions.updateBasicDetails({ name, dashboardName }));
    } catch (error) {
        yield put(actions.handleError({ isError: true }));
    }
}

export function* addUpdateStickyNotes(getState, { payload }) {
    const { type, text, priority, id } = payload;
    try {
       const state = yield getState();
       let _id = id;
       if(!_id) {
            if(state.stickyNotes.length) _id = state.stickyNotes[state.stickyNotes.length - 1].id + 1;
            else _id = 1;
       }
       const stickyDetails = {
           id: _id,
           priority,
           text
       }
       const clone = _.cloneDeep(state.stickyNotes);
       if(type === 'add') {
            clone.push(stickyDetails);
       } else if(type === 'delete') {
            const indexToRemove = clone.findIndex(sticky => sticky.id === +id);
            if(indexToRemove > -1) {
                clone.splice(indexToRemove, 1);
            }
       } else if(type === 'update') {
            const indexToUpdate = clone.findIndex(sticky => sticky.id === +id);
            if (indexToUpdate > -1) {
                clone[indexToUpdate].text = text;
                clone[indexToUpdate].priority = priority;
            }
       }
        yield set(constants.STICKY_NOTES, clone);
        yield put(actions.updateStickyNotes(clone));
    } catch (error) {
        yield put(actions.handleError({ isError: true }));
    }
}

export function* addUpdateTasks(getState, { payload }) {
    const { type, id, title, label, priority, status } = payload;
    try {
       const state = yield getState();
       const { tasks } = state;
       const allTasks = tasks.todo.concat(tasks.inProgress).concat(tasks.done);

       let _id = id;
       if(!_id) {
            if(allTasks.length) _id = allTasks[allTasks.length - 1].id + 1;
            else _id = 1;
        }
        const taskDetails = {
            id: Number(_id),
            title,
            label,
            priority,
            status
        }

        const clone = _.cloneDeep(tasks);
        if(type === 'add') {
            clone[status].push(taskDetails);
        } else if(type === 'delete') {
            const indexToRemove = clone[status].findIndex(task => task.id === +id);
            if(indexToRemove > -1) {
                clone[status].splice(indexToRemove, 1);
            }
        } else if(type === 'update') {
            const existingTaskDetail = allTasks.find(task => task.id === +id);
            if(existingTaskDetail?.status !== status) {
                const indexToRemove = clone[existingTaskDetail.status].findIndex(task => task.id === +id);
                if(indexToRemove > -1) {
                    clone[existingTaskDetail.status].splice(indexToRemove, 1);
                    clone[status].push(taskDetails);
                }
            } else {
                const indexToUpdate = clone[status].findIndex(task => task.id === +id);
                if(indexToUpdate > -1) {
                    clone[status][indexToUpdate] = { ...taskDetails }
                }
            }
       }
       yield set(constants.TASKS, clone);
       yield put(actions.updateTaks(clone));
    } catch (error) {
        yield put(actions.handleError({ isError: true }));
    }
}

export default function* rootSaga(getState) {
    yield takeLatest(actionTypes.GET_ALL_DETAILS, getAllDetails);
    yield takeLatest(actionTypes.REQUEST_UPDATE_BASIC_DETAILS, updateBasicDetails);
    yield takeLatest(actionTypes.STICKY_NOTE_MODIFICATION, addUpdateStickyNotes, getState);
    yield takeLatest(actionTypes.TASKS_MODIFICATION, addUpdateTasks, getState);
}