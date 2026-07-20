import { extend, warn, isObject, isFunction } from 'core/util/index'
import VNode from 'core/vdom/vnode'

/**
 * Runtime helper for rendering <slot>
 */
export function renderSlot(
  name: string,
  fallbackRender: ((() => Array<VNode>) | Array<VNode>) | null,
  props: Record<string, any> | null,
  bindObject: object | null
): Array<VNode> | null {
    throw new Error("STUB");
}
