import {
  TARGET_DESTROY,
  TARGET_DECREMENT,
  TARGET_SPAWN,
  TARGET_RESET
} from '../actions';
import { getRandomCoordinate, getRandomValue, getUniqueId } from '../utils';

const newTarget = () => ({
  id: getUniqueId(),
  x: getRandomCoordinate(),
  y: getRandomCoordinate(),
  value: getRandomValue()
});

const defaultState = {
  targets: [newTarget(), newTarget()]
};

const targets = (state = defaultState, action) => {
  switch (action.type) {
    case TARGET_DESTROY:
      return {
        targets: state.targets.filter(target => target.id !== action.targetId)
      };
    case TARGET_DECREMENT:
      return {
        targets: state.targets.map(target => ({
          ...target,
          value: target.value - 1
        }))
      };
    case TARGET_SPAWN:
      return {
        targets: [...state.targets, newTarget()]
      };
    case TARGET_RESET:
      return defaultState;
    default:
      return state;
  }
};

export default targets;
