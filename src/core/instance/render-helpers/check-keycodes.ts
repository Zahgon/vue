import config from 'core/config'
import { hyphenate, isArray } from 'shared/util'

function isKeyNotMatch<T>(expect: T | Array<T>, actual: T): boolean {
    throw new Error("STUB");
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
export function checkKeyCodes(
  eventKeyCode: number,
  key: string,
  builtInKeyCode?: number | Array<number>,
  eventKeyName?: string,
  builtInKeyName?: string | Array<string>
): boolean | null | undefined {
    throw new Error("STUB");
}
