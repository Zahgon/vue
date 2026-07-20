import { isObject, isDef, hasSymbol, isArray } from 'core/util/index'
import VNode from 'core/vdom/vnode'

/**
 * Runtime helper for rendering v-for lists.
 */
export function renderList(
  val: any,
  render: (val: any, keyOrIndex: string | number, index?: number) => VNode
): Array<VNode> | null {
    throw new Error("STUB");
}
