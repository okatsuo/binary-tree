export interface NodeInterface {
  data: number
  right: NodeInterface | undefined
  left: NodeInterface | undefined
}

export type NodeInterfaceOrUndefined = NodeInterface | undefined
