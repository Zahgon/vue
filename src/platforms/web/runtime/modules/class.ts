import { isDef, isUndef } from 'shared/util'
import type { VNodeData } from 'types/vnode'

import { concat, stringifyClass, genClassForVnode } from 'web/util/index'

function updateClass(oldVnode: any, vnode: any) {
    throw new Error("STUB");
}

export default {
  create: updateClass,
  update: updateClass
}
