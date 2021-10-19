// @ts-ignore
import {StateI} from "../app";

const DIRECTIONS = ['TOP', 'RIGHT', 'DOWN', 'LEFT'];

type DirectionsI = typeof DIRECTIONS[number];

export class Ant {
  private position: number;
  private antNr: number;

  constructor(state: StateI) {
    this.position = state.nestPosition;
    const cells = state.refs.cells;

    if (!cells) return;
    cells[this.position].classList.add('ant')



    // TODO create nice logger
    const logAnts = state.log.ants;

    if (!logAnts) return;

    // TODO Bug: state.ants?.length is not reliable in constructor. this.antNr is always 0
    this.antNr = state.ants?.length || 0;
    logAnts[this.antNr] = []
    logAnts[this.antNr].push(this.position)
  }

  move(state: StateI) {
    const cells = state.refs.cells;
    const oldPosition: number = this.position;
    const newPosition: number = this.position = this.moveToNearby(state);

    if (!cells || !oldPosition || !oldPosition) return;

    cells[oldPosition].classList.remove('ant');
    cells[newPosition].classList.add('ant');
  }

  private moveToNearby(state: StateI): number {
    const {
      config: {
        columns,
        rows
      }
    } = state;

    switch (this.randomDirection()) {
      case 'TOP':
        return (this.position > columns)
            ? this.position - columns
            : this.position
      case 'RIGHT':
        return ((this.position + 1) % columns === 0 )
            ? this.position
            : this.position + 1
      case 'DOWN':
        return (this.position < columns * rows - columns)
            ? this.position + columns
            : this.position
      case 'LEFT':
        return (this.position % columns === 0 )
            ? this.position
            : this.position - 1
      default:
        return this.position
    }
  }

  private randomDirection(): DirectionsI {
    const randomIndex = Math.floor(Math.random() * DIRECTIONS.length)
    return DIRECTIONS[randomIndex]
  }
}
