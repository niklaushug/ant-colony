export function changeScent(state: any, type: string) {
  const {
    ants,
    scent: currentScents
  } = state;

  let nextScent
  switch(type) {
    case 'MARK':
      ants.forEach((ant: any) => {
        const scent = currentScents.get(ant.position) || 0;
        nextScent = notHigher(scent + 15, 100);
        applyScent(state, ant.position, nextScent)
      })

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