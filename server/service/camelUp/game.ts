import { Board } from './board'
type InRoundState = string
type ResultState = string

export type Game = {
  board: Board
  state: InRoundState | ResultState
}
