export class Document<T> {
  /**
   * Allow to easily apply data from object to current document.
   */
  _applyData(data) {
    for (const key in data) {
      this[key] = data[key];
    }
  }
}
