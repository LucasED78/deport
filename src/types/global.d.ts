declare global {
  interface String {
    limit(int: number): string
    isEmpty(): boolean
  }

  interface Array {
    classify(): string
  }
}

export {}