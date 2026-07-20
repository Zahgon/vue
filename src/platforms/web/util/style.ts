import VNode from 'core/vdom/vnode'
import { cached, extend, toObject } from 'shared/util'
import type { VNodeData, VNodeWithData } from 'types/vnode'

export const parseStyleText = cached(function (cssText) {
    throw new Error("STUB");
})

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data: VNodeData): Record<string, any> {
    throw new Error("STUB");
}

// normalize possible array / string values into Object
export function normalizeStyleBinding(bindingStyle: any): Record<string, any> {
    throw new Error("STUB");
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
export function getStyle(vnode: VNodeWithData, checkChild: boolean): Object {
    throw new Error("STUB");
}
