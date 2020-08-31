String.prototype.limit = function(quantity: number): string {
  if (this.length === quantity) {
    return this.toString();
  }

  const limited = this.substring(0, quantity);

  return `${limited}...`;
}

String.prototype.isEmpty = function(): boolean {
  if (this === '' || this === 'undefined' || this === null) {
    return true;
  }

  return false;
}

export {}