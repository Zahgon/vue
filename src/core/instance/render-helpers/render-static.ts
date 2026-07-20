import VNode from 'core/vdom/vnode'
import { isArray } from 'core/util'

/**
 * Runtime helper for rendering static trees.
 */
export function renderStatic(
  index: number,
  isInFor: boolean
): VNode | Array<VNode> {
    throw new Error("STUB");
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
export function markOnce(
  tree: VNode | Array<VNode>,
  index: number,
  key: string
) {
    throw new Error("STUB");
}

function markStatic(tree: VNode | Array<VNode>, key: string, isOnce: boolean) {
  if (isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], `${key}_${i}`, isOnce)
      }
    }
  } else {
    markStaticNode(tree, key, isOnce)
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true
  node.key = key
  node.isOnce = isOnce
}
