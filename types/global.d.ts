interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadPyodide: (config: { indexURL: string }) => Promise<any>
}

interface Performance {
  memory?: {
    jsHeapSizeLimit: number
    totalJSHeapSize: number
    usedJSHeapSize: number
  }
}
