declare global {
  interface String {
    limit(int: number): string
  }

  interface Array {
    classify(): string
  }
}

export {}