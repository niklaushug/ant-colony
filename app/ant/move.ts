export function move(state: any) {
  const currentAntPosition = state.antPosition;
  const newAntPosition = moveToNearby(state);

  state.cellRefs[currentAntPosition].classList.remove('ant')
  state.cellRefs[newAntPosition].classList.add('ant')

  state.antPosition = newAntPosition;
}


function moveToNearby(state: any) {
  const {
    antPosition:currentAntPosition,
    world: {
      columns,
      rows
    }
  } = state;

  let newAntPosition;

  switch (randomDirection()) {
    case 'TOP':
      newAntPosition = (currentAntPosition > columns)
        ? currentAntPosition - columns
        : currentAntPosition
      break;
    case 'RIGHT':
      newAntPosition = ((currentAntPosition + 1) % columns === 0 )
        ? currentAntPosition
        : currentAntPosition + 1
      break;
    case 'DOWN':
      newAntPosition = (currentAntPosition < columns * rows - columns)
        ? currentAntPosition + columns
        : currentAntPosition
      break;
    case 'LEFT':
      newAntPosition = (currentAntPosition % columns === 0 )
        ? currentAntPosition
        : currentAntPosition - 1
      break;
  }
  // console.log('currentAntPosition', currentAntPosition, '->', newAntPosition, 'newAntPosition')

  return newAntPosition
}


function randomDirection() {
  const DIRECTIONS = ['TOP', 'RIGHT', 'DOWN', 'LEFT'];
  const randomIndex = Math.floor(Math.random() * DIRECTIONS.length)
  // console.log('direction', DIRECTIONS[randomIndex])
  return DIRECTIONS[randomIndex]
}