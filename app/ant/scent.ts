// @ts-ignore
import {StateI} from "../app";

export function changeScent(state: StateI, type: string) {
  const {
    ants,
    scent: currentScents
  } = state;

  let nextScent

  switch(type) {
    case 'MARK':
      if (ants) {
        ants.forEach((ant: any) => {
          const scent = currentScents.get(ant.position) || 0;
          nextScent = notHigher(scent + 15, 100);
          applyScent(state, ant.position, nextScent)
        })
      }
      break;
    case 'FADE':
      currentScents.forEach((scent: number, position: number) => {
        nextScent = notSmaller(scent - 1, 0);
        applyScent(state, position, nextScent)
      })
      break;
  }
}

function applyScent(state: StateI, index: number, nextScent: number) {
  if (state.refs.cells) {
    state.refs.cells[index].setAttribute('style', `--scent: ${nextScent / 100}`);
  }
  state.scent.set(index, nextScent)
}

function notHigher(value: number, limit: number) {
  return value > limit ? limit : value;
}

function notSmaller(value: number, limit: number) {
  return value < limit ? limit : value;
}