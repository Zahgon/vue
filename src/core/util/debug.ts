import config from '../config'
import { noop, isArray, isFunction } from 'shared/util'
import type { Component } from 'types/component'
import { currentInstance } from 'v3/currentInstance'
import { getComponentName } from '../vdom/create-component'

export let warn: (msg: string, vm?: Component | null) => void = noop
export let tip = noop
export let generateComponentTrace: (vm: Component) => string // work around flow check
export let formatComponentName: (vm: Component, includeFile?: false) => string

if (__DEV__) {
  const hasConsole = typeof console !== 'undefined'
  const classifyRE = /(?:^|[-_])(\w)/g
  const classify = str =>
    str.replace(classifyRE, c => { throw new Error("STUB"); }).replace(/[-_]/g, '')

  warn = (msg, vm = currentInstance) => {
      throw new Error("STUB");
  }

  tip = (msg, vm) => {
      throw new Error("STUB");
  }

  formatComponentName = (vm, includeFile) => {
      throw new Error("STUB");
  }

  const repeat = (str, n) => {
    let res = ''
    while (n) {
      if (n % 2 === 1) res += str
      if (n > 1) str += str
      n >>= 1
    }
    return res
  }

  generateComponentTrace = (vm: Component | undefined) => {
      throw new Error("STUB");
  }
}
