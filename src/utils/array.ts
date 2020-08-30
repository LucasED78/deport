Array.prototype.classify = function(): string {
  if (this.length) {
    return this.reduce((previous, current) => {
      return [previous, current]
        .join(' ')
    })
  }

  return '';
}

export default {}