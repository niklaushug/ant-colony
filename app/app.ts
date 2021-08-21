// @ts-ignore
import {populateWorld, setUpWorld} from './world/world.ts'
// @ts-ignore
import {bringToLife} from './ant/bringToLife.ts'

let state = {
  scent: new Map(),
  world: {
    columns: 8,
    tickMs: 100,
    lifetimeMs: 4000,
    rows: 8,
  }
}

setUpWorld(state);
populateWorld(state);
bringToLife(state);