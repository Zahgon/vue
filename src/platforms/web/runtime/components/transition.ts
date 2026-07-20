// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

import { warn } from 'core/util/index'
import { camelize, extend, isPrimitive } from 'shared/util'
import {
  mergeVNodeHook,
  isAsyncPlaceholder,
  getFirstComponentChild
} from 'core/vdom/helpers/index'
import VNode from 'core/vdom/vnode'
import type { Component } from 'types/component'

export const transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode?: VNode): VNode | undefined {
    throw new Error("STUB");
}

export function extractTransitionData(comp: Component): Record<string, any> {
    throw new Error("STUB");
}

function placeholder(h: Function, rawChild: VNode): VNode | undefined {
    throw new Error("STUB");
}

function hasParentTransition(vnode: VNode): boolean | undefined {
    throw new Error("STUB");
}

function isSameChild(child: VNode, oldChild: VNode): boolean {
    throw new Error("STUB");
}

const isNotTextNode = (c: VNode) => { throw new Error("STUB"); }

const isVShowDirective = d => { throw new Error("STUB"); }

export default {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render(h: Function) {
      throw new Error("STUB");
  }
}
