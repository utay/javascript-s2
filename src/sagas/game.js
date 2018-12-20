import { put, takeEvery } from 'redux-saga/effects';
import {
  GAME_START,
  GAME_START_REQUESTED,
  TARGET_DECREMENT,
  TARGET_DECREMENT_REQUESTED,
  TARGET_SPAWN,
  TARGET_SPAWN_REQUESTED
} from '../actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* decrementTargets() {
  yield delay(1000);
  yield put({ type: TARGET_DECREMENT });
  yield decrementTargets();
}

function* spawnTarget() {
  yield delay(1000);
  yield put({ type: TARGET_SPAWN });
  yield spawnTarget();
}

function* startGame() {
  yield put({ type: GAME_START });
}

function* gameSaga() {
  yield takeEvery(GAME_START_REQUESTED, startGame);
  yield takeEvery(TARGET_SPAWN_REQUESTED, spawnTarget);
  yield takeEvery(TARGET_DECREMENT_REQUESTED, decrementTargets);
}

export default gameSaga;
