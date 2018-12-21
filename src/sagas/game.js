import { put, take, fork, cancel, cancelled } from 'redux-saga/effects';
import {
  GAME_START,
  GAME_START_REQUESTED,
  GAME_STOP,
  GAME_STOP_REQUESTED,
  TARGET_RESET,
  TARGET_DECREMENT,
  TARGET_DECREMENT_REQUESTED,
  TARGET_SPAWN,
  TARGET_SPAWN_REQUESTED
} from '../actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* decrementTargets() {
  try {
    while (true) {
      yield delay(1000);
      yield put({ type: TARGET_DECREMENT });
    }
  } finally {
    if (yield cancelled()) console.log('lol');
  }
}

function* spawnTarget() {
  try {
    while (true) {
      yield delay(1000);
      yield put({ type: TARGET_SPAWN });
    }
  } finally {
    if (yield cancelled()) console.log('lol');
  }
}

function* startGame() {
  yield put({ type: GAME_START });
}

function* stopGame() {
  yield put({ type: GAME_STOP });
  yield put({ type: TARGET_RESET });
}

function* gameSaga() {
  while (yield take(GAME_START_REQUESTED)) {
    yield startGame();

    const spawnTargetTask = yield fork(spawnTarget);
    const decrementTargetsTask = yield fork(decrementTargets);

    yield take(GAME_STOP_REQUESTED);

    yield cancel(spawnTargetTask);
    yield cancel(decrementTargetsTask);

    yield stopGame();
  }
}

export default gameSaga;
