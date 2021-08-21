// @ts-ignore
import {getCellNr, populateWorld, setUpWorld} from './world/world.ts'
// @ts-ignore
import {bringToLife} from './ant/bringToLife.ts'

export type ConfigI = {
  columns: number,
  tickMs: number,
  lifetimeMs: number,
  rows: number
}

export interface StateI {
  ants?: Object[]
  config: ConfigI
  foodPosition: number
  nestPosition: number
  refs: {
    cells: NodeListOf<HTMLElement> | null
    world: HTMLElement | null
  }
  scent: Map<number, number>
}

const config: ConfigI = {
  columns: 8,
  tickMs: 100,
  lifetimeMs: 4000,
  rows: 8,
}

const state: StateI = {
  ants: [],
  config: {
    ...config
  },
  foodPosition: getCellNr(config.columns, config.rows),
  nestPosition: getCellNr(config.columns, config.rows),
  refs: {
    cells: null,
    world: null,
  },
  scent: new Map(),
}

setUpWorld(state);
populateWorld(state);
bringToLife(state);