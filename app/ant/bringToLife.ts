// @ts-ignore
import {changeScent} from './scent.ts';
// @ts-ignore
import {StateI} from "../app";


export function bringToLife(state: StateI) {
  const {
    tickMs,
    lifetimeMs
  } = state.config;

  const lifetimeTick = (state: StateI) => {
    if (state.ants) {
      state.ants.forEach((ant: any) => ant.move(state));
    }
    changeScent(state, 'MARK');
    changeScent(state, 'FADE');
  }

  const lifetimelInterval = window.setInterval(
    (state: StateI) => lifetimeTick(state),
    tickMs,
    state
  )

  window.setTimeout(
    () => {
      console.log(state);
      window.clearInterval(lifetimelInterval);
    },
    lifetimeMs
  )
}


