/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NodeInterface, NodeInterfaceOrUndefined } from './interface'

export class Node implements NodeInterface {
  data: number
  right: NodeInterfaceOrUndefined
  left: NodeInterfaceOrUndefined
  constructor (data: number, right?: NodeInterfaceOrUndefined, left?: NodeInterfaceOrUndefined) {
    this.data = data
    this.right = right
    this.left = left
  }
}
