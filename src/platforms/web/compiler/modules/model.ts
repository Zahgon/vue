/**
 * Expand input[v-model] with dynamic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

import { addRawAttr, getBindingAttr, getAndRemoveAttr } from 'compiler/helpers'

import {
  processFor,
  processElement,
  addIfCondition,
  createASTElement
} from 'compiler/parser/index'
import { ASTElement, CompilerOptions, ModuleOptions } from 'types/compiler'

function preTransformNode(el: ASTElement, options: CompilerOptions) {
    throw new Error("STUB");
}

function cloneASTElement(el) {
    throw new Error("STUB");
}

export default {
  preTransformNode
} as ModuleOptions
