import State from './state'
import { Player } from './player'

function earn(amount: number): State<Player, string> {
  return new State<Player, string>((player) => [
    `${player.name || player.id}が家計から${amount}を獲得しました`,
    { ...player, point: player.point + amount }
  ])
}
