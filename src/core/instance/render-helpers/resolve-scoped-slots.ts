import type { ScopedSlotsData } from 'types/vnode'
import { isArray } from 'core/util'

export function resolveScopedSlots(
  fns: ScopedSlotsData,
  res?: Record<string, any>,
  // the following are added in 2.6
  hasDynamicKeys?: boolean,
  contentHashKey?: number
): { $stable: boolean } & { [key: string]: Function } {
    throw new Error("STUB");
}
