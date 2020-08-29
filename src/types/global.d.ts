declare global {
  interface String {
    limit(int: number): string
  }
}

export {}