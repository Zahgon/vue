import { isRegExp, isArray, remove } from 'shared/util'
import { getFirstComponentChild } from 'core/vdom/helpers/index'
import type VNode from 'core/vdom/vnode'
import type { VNodeComponentOptions } from 'types/vnode'
import type { Component } from 'types/component'
import { getComponentName } from '../vdom/create-component'

type CacheEntry = {
  name?: string
  tag?: string
  componentInstance?: Component
}

type CacheEntryMap = Record<string, CacheEntry | null>

function _getComponentName(opts?: VNodeComponentOptions): string | null {
    throw new Error("STUB");
}

function matches(
  pattern: string | RegExp | Array<string>,
  name: string
): boolean {
    throw new Error("STUB");
}

function pruneCache(
  keepAliveInstance: {
    cache: CacheEntryMap
    keys: string[]
    _vnode: VNode
    $vnode: VNode
  },
  filter: Function
) {
    throw new Error("STUB");
}

function pruneCacheEntry(
  cache: CacheEntryMap,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
    throw new Error("STUB");
}

const patternTypes: Array<Function> = [String, RegExp, Array]

// TODO defineComponent
export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode() {
          throw new Error("STUB");
      }
  },

  created() {
      throw new Error("STUB");
  },

  destroyed() {
      throw new Error("STUB");
  },

  mounted() {
      throw new Error("STUB");
  },

  updated() {
      throw new Error("STUB");
  },

  render() {
      throw new Error("STUB");
  }
}
