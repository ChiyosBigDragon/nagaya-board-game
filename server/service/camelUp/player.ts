import { Action } from './action'

export type Player = {
  id: string
  name?: string
  point: number
  action: Action[]
}
