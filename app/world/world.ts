// @ts-ignore
import {StateI} from "../app";
// @ts-ignore
import {changeScent} from '../ant/scent.ts';
// @ts-ignore
import {Ant} from '../ant/ant.ts';

export function setUpWorld(state: StateI) {
  const {
    columns,
    rows
  } = state.config;

  const worldRef = state.refs.world = document.querySelector('.world');

  if (!worldRef) return;

  worldRef.setAttribute('style', `--columns: ${columns}; --rows: ${rows}`)

  for (let i = 1; i <= columns * rows; i++ ) {
    const node = document.createElement('div')
    node.className = 'cell'
    worldRef.appendChild(node)
  }

  state.refs.cells = worldRef.querySelectorAll('.cell');

}

export function populateWorld(state: StateI) {
  const {
    ants,
    nestPosition,
    foodPosition,
    refs: {
      cells,
    }
  } = state;

  if (!cells || !ants) return;

  cells[nestPosition].classList.add('nest');
  cells[foodPosition].classList.add('food');

  ants.push(new Ant(state), new Ant(state));
}

export function getCellNr(columns: number, rows: number): number {
  return Math.floor(Math.random() * (columns * rows -1))
}