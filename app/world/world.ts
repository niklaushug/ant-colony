// @ts-ignore
import {changeScent} from '../ant/scent.ts'

export function setUpWorld(state: any) {
  const {
    columns,
    rows
  } = state.world;

  const worldRef = document.querySelector('.world');

  if (worldRef) {
    worldRef.setAttribute('style', `--columns: ${columns}; --rows: ${rows}`)

    for (let i = 1; i <= columns * rows; i++ ) {
      const node = document.createElement('div')
      node.className = 'cell'
      worldRef.appendChild(node)
    }

    state.cellRefs = worldRef.querySelectorAll('.cell');
  }
}

export function populateWorld(state: any) {
  const {
    columns,
    rows
  } = state.world;

  const nestPosition = getCellNr(columns, rows);
  const foodPosition = getCellNr(columns, rows);

  state.foodPosition = foodPosition;
  state.antPosition = nestPosition;  // TODO let many ants crawl

  state.cellRefs[nestPosition].classList.add('nest');
  state.cellRefs[nestPosition].classList.add('ant');
  state.cellRefs[foodPosition].classList.add('food');

  changeScent(state, 'MARK');
}

function getCellNr(columns: number, rows: number) {
  return Math.floor(Math.random() * (columns * rows -1))
}