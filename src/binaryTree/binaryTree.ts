/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Node, NodeInterface, NodeInterfaceOrUndefined } from '../node'
import { BinaryTreeInterface } from './interface'

export class BinaryTree implements BinaryTreeInterface {
  private root: NodeInterfaceOrUndefined = undefined
  private readonly message_root_empty = 'The root is empty'

  search (node: NodeInterfaceOrUndefined, data: number): NodeInterfaceOrUndefined {
    if (node == null) {
      return undefined
    } else if (data < node.data) {
      return this.search(node.left, data)
    } else if (data > node.data) {
      return this.search(node.right, data)
    } else {
      console.log(`the node ${data} is on the root`, node)
      return node
    }
  }

  rootOrder (node: NodeInterfaceOrUndefined): void {
    if (node !== undefined) {
      this.rootOrder(node.left)
      console.log(node.data)
      this.rootOrder(node.right)
    }
  }

  rootPreOrder (node: NodeInterfaceOrUndefined): void {
    if (node !== undefined) {
      console.log(node.data)
      this.rootPreOrder(node.left)
      this.rootPreOrder(node.right)
    }
  }

  smallestNode (node: NodeInterfaceOrUndefined): NodeInterfaceOrUndefined {
    if (node == null) {
      console.log(this.message_root_empty)
      return
    }
    if (node?.left !== undefined) {
      this.smallestNode(node.left)
    } else {
      console.log('=======the smallest is:', node?.data)
      return node
    }
  }

  getRoot (): NodeInterfaceOrUndefined {
    return this.root
  }

  rootPostOrder (node: NodeInterfaceOrUndefined): void {
    if (node !== undefined) {
      this.rootPostOrder(node.left)
      this.rootPostOrder(node.right)
      console.log(`======current:${node.data}`)
    }
  }

  private insertNewNode (root: NodeInterface, newNode: NodeInterface): void {
    if (newNode.data < root.data) {
      if (root.left === undefined) {
        root.left = newNode
      } else {
        this.insertNewNode(root.left, newNode)
      }
    } else {
      if (root.right === undefined) {
        root.right = newNode
      } else {
        this.insertNewNode(root.right, newNode)
      }
    }
  }

  insert (value: number): void {
    const newNode = new Node(value)
    if (this.root === undefined) {
      this.root = newNode
    } else {
      this.insertNewNode(this.root, newNode)
    }
  }

  private removeNode (node: NodeInterfaceOrUndefined, data: number): NodeInterfaceOrUndefined {
    if (node === undefined) {
      return undefined
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
    } else {
      if (node.left === undefined && node.right === undefined) {
        node = undefined
        return node
      } else if (node.right === undefined) {
        node = node.left
        return node
      }
      const aux = this.smallestNode(node.right)
      node.data = aux!.data
      node.right = this.removeNode(node.right, aux!.data)
      return node
    }
  }

  remove (data: number): void {
    this.root = this.removeNode(this.root, data)
  }

  showRoot (): void {
    console.log(this.root)
  }
}
