import { getStyle, normalizeStyleBinding } from 'web/util/style'
import {
  cached,
  camelize,
  extend,
  isDef,
  isUndef,
  hyphenate
} from 'shared/util'
import type { VNodeWithData } from 'types/vnode'

const cssVarRE = /^--/
const importantRE = /\s*!important$/
const setProp = (el, name, val) => {
    throw new Error("STUB");
}

const vendorNames = ['Webkit', 'Moz', 'ms']

let emptyStyle
const normalize = cached(function (prop) {
    throw new Error("STUB");
})

function updateStyle(oldVnode: VNodeWithData, vnode: VNodeWithData) {
    throw new Error("STUB");
}

export default {
  create: updateStyle,
  update: updateStyle
}
