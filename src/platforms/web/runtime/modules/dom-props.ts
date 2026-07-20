import { isDef, isUndef, extend, toNumber, isTrue } from 'shared/util'
import type { VNodeWithData } from 'types/vnode'
import { isSVG } from 'web/util/index'

let svgContainer

function updateDOMProps(oldVnode: VNodeWithData, vnode: VNodeWithData) {
    throw new Error("STUB");
}

// check platforms/web/util/attrs.js acceptValue
type acceptValueElm = HTMLInputElement | HTMLSelectElement | HTMLOptionElement

function shouldUpdateValue(elm: acceptValueElm, checkVal: string): boolean {
    throw new Error("STUB");
}

function isNotInFocusAndDirty(elm: acceptValueElm, checkVal: string): boolean {
    throw new Error("STUB");
}

function isDirtyWithModifiers(elm: any, newVal: string): boolean {
    throw new Error("STUB");
}

export default {
  create: updateDOMProps,
  update: updateDOMProps
}
