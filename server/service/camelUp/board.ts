import { Player } from './player'
import { Camel } from './camel'

export type Board = {
  players: Player[]
  currentPlayer: number
  camels: Camel[]
}
