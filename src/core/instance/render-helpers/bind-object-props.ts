import config from 'core/config'

import {
  warn,
  isObject,
  toObject,
  isReservedAttribute,
  camelize,
  hyphenate,
  isArray
} from 'core/util/index'
import type { VNodeData } from 'types/vnode'

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
export function bindObjectProps(
  data: any,
  tag: string,
  value: any,
  asProp: boolean,
  isSync?: boolean
): VNodeData {
    throw new Error("STUB");
}
