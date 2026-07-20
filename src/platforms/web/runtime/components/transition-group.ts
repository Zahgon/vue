// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

import { warn, extend } from 'core/util/index'
import { addClass, removeClass } from 'web/runtime/class-util'
import { transitionProps, extractTransitionData } from './transition'
import { setActiveInstance } from 'core/instance/lifecycle'

import {
  hasTransition,
  getTransitionInfo,
  transitionEndEvent,
  addTransitionClass,
  removeTransitionClass
} from 'web/runtime/transition-util'
import VNode from 'core/vdom/vnode'
import { VNodeWithData } from 'types/vnode'
import { getComponentName } from 'core/vdom/create-component'

const props = extend(
  {
    tag: String,
    moveClass: String
  },
  transitionProps
)

delete props.mode

export default {
  props,

  beforeMount() {
      throw new Error("STUB");
  },

  render(h: Function) {
      throw new Error("STUB");
  },

  updated() {
      throw new Error("STUB");
  },

  methods: {
    hasMove(el: any, moveClass: string): boolean {
          throw new Error("STUB");
      }
  }
}

function callPendingCbs(
  c: VNodeWithData & { elm?: { _moveCb?: Function; _enterCb?: Function } }
) {
    throw new Error("STUB");
}

function recordPosition(c: VNodeWithData) {
    throw new Error("STUB");
}

function applyTranslation(c: VNodeWithData) {
    throw new Error("STUB");
}
