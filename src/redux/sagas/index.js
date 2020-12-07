import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { get, set } from 'idb-keyval';

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
       const updatedStickies = [...state.stickyNotes];
       if(type === 'add') {
           updatedStickies.push(stickyDetails);
       } else if(type === 'delete') {
            const indexToRemove = updatedStickies.find(sticky => sticky.id === Number(id));
            if(indexToRemove > -1) {
                updatedStickies.splice(indexToRemove, 1);
            }
       } else if(type === 'update') {
            const indexToUpdate = updatedStickies.findIndex(sticky => sticky.id === Number(id));
            if (indexToUpdate > -1) {
                updatedStickies[indexToUpdate].text = text;
            }
       }
        yield set(constants.STICKY_NOTES, updatedStickies);
        yield put(actions.updateStickyNotes(updatedStickies));
    } catch (error) {
        yield put(actions.handleError({ isError: true }));
    }
}

export default function* rootSaga(getState) {
    yield takeLatest(actionTypes.GET_ALL_DETAILS, getAllDetails);
    yield takeLatest(actionTypes.REQUEST_UPDATE_BASIC_DETAILS, updateBasicDetails);
    yield takeLatest(actionTypes.STICKY_NOTE_MODIFICATION, addUpdateStickyNotes, getState);
}