import { warn, isFunction, isObject } from 'core/util'

interface AsyncComponentOptions {
  loader: Function
  loadingComponent?: any
  errorComponent?: any
  delay?: number
  timeout?: number
  suspensible?: boolean
  onError?: (
    error: Error,
    retry: () => void,
    fail: () => void,
    attempts: number
  ) => any
}

type AsyncComponentFactory = () => {
  component: Promise<any>
  loading?: any
  error?: any
  delay?: number
  timeout?: number
}

/**
 * v3-compatible async component API.
 * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
 * because it relies on existing manual types
 */
export function defineAsyncComponent(
  source: (() => any) | AsyncComponentOptions
): AsyncComponentFactory {
    throw new Error("STUB");
}
