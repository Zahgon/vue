import { isIE, isIE9, isEdge } from 'core/util/env'

import { extend, isDef, isUndef, isTrue } from 'shared/util'
import type { VNodeWithData } from 'types/vnode'

import {
  isXlink,
  xlinkNS,
  getXlinkProp,
  isBooleanAttr,
  isEnumeratedAttr,
  isFalsyAttrValue,
  convertEnumeratedValue
} from 'web/util/index'

function updateAttrs(oldVnode: VNodeWithData, vnode: VNodeWithData) {
    throw new Error("STUB");
}

function setAttr(el: Element, key: string, value: any, isInPre?: any) {
    throw new Error("STUB");
}

function baseSetAttr(el, key, value) {
    throw new Error("STUB");
}

export default {
  create: updateAttrs,
  update: updateAttrs
}
