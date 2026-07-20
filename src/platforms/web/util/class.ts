import VNode from 'core/vdom/vnode'
import { isDef, isObject } from 'shared/util'
import type { VNodeData, VNodeWithData } from 'types/vnode'

export function genClassForVnode(vnode: VNodeWithData): string {
    throw new Error("STUB");
}

function mergeClassData(
  child: VNodeData,
  parent: VNodeData
): {
  staticClass: string
  class: any
} {
    throw new Error("STUB");
}

export function renderClass(
  staticClass: string | null | undefined,
  dynamicClass: any
): string {
    throw new Error("STUB");
}

export function concat(a?: string | null, b?: string | null): string {
  return a ? (b ? a + ' ' + b : a) : b || ''
}

export function stringifyClass(value: any): string {
    throw new Error("STUB");
}

function stringifyArray(value: Array<any>): string {
    throw new Error("STUB");
}

function stringifyObject(value: Object): string {
    throw new Error("STUB");
}
