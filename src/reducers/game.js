import {
  GAME_START,
  GAME_STOP,
  SCORE_INCREMENT,
  LIVES_DECREMENT
} from '../actions';

const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...defaultState,
        isStarted: true
      };
    case GAME_STOP:
      return {
        ...state,
        isStarted: false
      };
    case SCORE_INCREMENT:
      return {
        ...state,
        score: state.score + 1
      };
    case LIVES_DECREMENT:
      return {
        ...state,
        lives: state.lives - 1
      };
    default:
      return state;
  }
};

export default game;
