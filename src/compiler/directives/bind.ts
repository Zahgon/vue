import { ASTDirective, ASTElement } from 'types/compiler'

export default function bind(el: ASTElement, dir: ASTDirective) {
  el.wrapData = (code: string) => {
      throw new Error("STUB");
  }
}
