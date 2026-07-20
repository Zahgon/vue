import { watchPostEffect } from '../'
import { inBrowser, warn } from 'core/util'
import { currentInstance } from '../currentInstance'

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
export function useCssVars(
  getter: (
    vm: Record<string, any>,
    setupProxy: Record<string, any>
  ) => Record<string, string>
) {
    throw new Error("STUB");
}
