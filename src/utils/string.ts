String.prototype.limit = function(quantity: number): string {
  if (this.length == quantity) {
    return this.toString();
  }

  const limited = this.substring(0, quantity);

  return `${limited}...`;
}

export {}