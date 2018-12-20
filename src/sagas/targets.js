import { put, takeEvery } from 'redux-saga/effects';
import {
  TARGET_DESTROY,
  TARGET_DESTROY_REQUESTED,
  SELF_TARGET_DESTROY_REQUESTED,
  LIVES_DECREMENT,
  SCORE_INCREMENT
} from '../actions';

function* destroyTarget(action) {
  yield put({ type: TARGET_DESTROY, targetId: action.targetId });
  yield put({ type: SCORE_INCREMENT });
}

function* selfDestroyTarget(action) {
  yield put({ type: TARGET_DESTROY, targetId: action.targetId });
  yield put({ type: LIVES_DECREMENT });
}

export function* targetsSaga() {
  yield takeEvery(TARGET_DESTROY_REQUESTED, destroyTarget);
  yield takeEvery(SELF_TARGET_DESTROY_REQUESTED, selfDestroyTarget);
}

export default targetsSaga;
