import { inBrowser } from './env'

export let mark
export let measure

if (__DEV__) {
  const perf = inBrowser && window.performance
  /* istanbul ignore if */
  if (
    perf &&
    // @ts-ignore
    perf.mark &&
    // @ts-ignore
    perf.measure &&
    // @ts-ignore
    perf.clearMarks &&
    // @ts-ignore
    perf.clearMeasures
  ) {
    mark = tag => { throw new Error("STUB"); }
    measure = (name, startTag, endTag) => {
        throw new Error("STUB");
    }
  }
}
