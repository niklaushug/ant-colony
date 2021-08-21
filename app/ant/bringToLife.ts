// @ts-ignore
import {changeScent} from './scent.ts';
// @ts-ignore
import {move} from './move.ts';

export function bringToLife(state: any) {
  const {
    tickMs,
    lifetimeMs
  } = state.world;

  const lifetimeTick = (state: any) => {
    move(state);
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
      // console.log(state: any);
      window.clearInterval(lifetimelInterval);
    },
    lifetimeMs
  )
}


