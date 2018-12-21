import {
  TARGET_DESTROY,
  TARGET_DECREMENT,
  TARGET_SPAWN,
  TARGET_SPAWN_PER_SECOND,
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
  nbTargetsPerSecond: 1,
  targets: [newTarget(), newTarget()]
};

const targets = (state = defaultState, action) => {
  switch (action.type) {
    case TARGET_SPAWN_PER_SECOND:
      return {
        ...state,
        nbTargetsPerSecond: state.nbTargetsPerSecond + 1
      };
    case TARGET_DESTROY:
      return {
        ...state,
        targets: state.targets.filter(target => target.id !== action.targetId)
      };
    case TARGET_DECREMENT:
      return {
        ...state,
        targets: state.targets.map(target => ({
          ...target,
          value: target.value - 1
        }))
      };
    case TARGET_SPAWN:
      const newTargets = state.targets;
      for (let i = 0; i < state.nbTargetsPerSecond; ++i) {
        newTargets.push(newTarget());
      }
      return {
        ...state,
        targets: newTargets
      };
    case TARGET_RESET:
      return {
        ...defaultState,
        targets: [newTarget(), newTarget()]
      };
    default:
      return state;
  }
};

export default targets;
