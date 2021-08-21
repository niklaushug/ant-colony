export class Ant {
  private position: any;

  constructor(state: any) {
    this.position = state.nestPosition;
    state.cellRefs[this.position].classList.add('ant')
  }

  move(state: any) {
    state.cellRefs[this.position].classList.remove('ant')
    this.position = this.moveToNearby(state);
    state.cellRefs[this.position].classList.add('ant')
  }

  private moveToNearby(state: any) {
    const {
      world: {
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
    }
  }

  private randomDirection() {
    const DIRECTIONS = ['TOP', 'RIGHT', 'DOWN', 'LEFT'];
    const randomIndex = Math.floor(Math.random() * DIRECTIONS.length)
    // console.log('direction', DIRECTIONS[randomIndex])  // TODO remove later
    return DIRECTIONS[randomIndex]
  }
}
