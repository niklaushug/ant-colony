// @ts-ignore
import {changeScent} from './scent.ts';

export function bringToLife(state: any) {
  const {
    tickMs,
    lifetimeMs
  } = state.world;

  const lifetimeTick = (state: any) => {
    state.ants.forEach((ant: any) => ant.move(state));
    changeScent(state, 'MARK');
    changeScent(state, 'FADE');
  }

  const lifetimelInterval = window.setInterval(
    (state: any) => lifetimeTick(state),
    tickMs,
    state
  )

  window.setTimeout(
    () => {
      window.clearInterval(lifetimelInterval);
    },
    lifetimeMs
  )
}


