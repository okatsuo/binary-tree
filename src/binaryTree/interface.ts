import { NodeInterfaceOrUndefined } from '../node'

export interface BinaryTreeInterface {
  rootPostOrder: (node: NodeInterfaceOrUndefined) => void
  rootPreOrder: (node: NodeInterfaceOrUndefined) => void
  smallestNode: (node: NodeInterfaceOrUndefined) => NodeInterfaceOrUndefined
  rootOrder: (node: NodeInterfaceOrUndefined) => void
  showRoot: () => void
  getRoot: () => NodeInterfaceOrUndefined
  search: (node: NodeInterfaceOrUndefined, data: number) => NodeInterfaceOrUndefined
  insert: (value: number) => void
  remove: (data: number) => void
}
