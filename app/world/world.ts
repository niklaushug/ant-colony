// @ts-ignore
import {changeScent} from '../ant/scent.ts';
// @ts-ignore
import {Ant} from '../ant/ant.ts';

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

  const nestPosition = state.nestPosition = getCellNr(columns, rows);
  const foodPosition = state.foodPosition = getCellNr(columns, rows);

  state.cellRefs[nestPosition].classList.add('nest');
  state.cellRefs[foodPosition].classList.add('food');

  state.ants = [];
  state.ants.push(new Ant(state), new Ant(state));
}

function getCellNr(columns: number, rows: number) {
  return Math.floor(Math.random() * (columns * rows -1))
}