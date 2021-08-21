export function changeScent(state: any, type: string) {
  const {
    antPosition:currentAntPosition,
    scent: currentScents
  } = state;

  let nextScent
  switch(type) {
    case 'MARK':
      const scent = currentScents.get(currentAntPosition) || 0;
      nextScent = notHigher(scent + 15, 100);
      applyScent(state, currentAntPosition, nextScent)
      break;
    case 'FADE':
      currentScents.forEach((scent: number, position: number) => {
        nextScent = notSmaller(scent - 1, 0);
        applyScent(state, position, nextScent)
      })
      break;
  }
}

function applyScent(state: any, index: number, nextScent: number) {
  state.cellRefs[index].setAttribute('style', `--scent: ${nextScent / 100}`);
  state.scent.set(index, nextScent)
}

function notHigher(value: number, limit: number) {
  return value > limit ? limit : value;
}

function notSmaller(value: number, limit: number) {
  return value < limit ? limit : value;
}