export class BaseSerializer {
  constructor(readonly serializer: any, readonly partial: any) {}

  render() {
    if (Array.isArray(this.partial)) {
      return this.partial.map((item) => new this.serializer(item));
    } else {
      return new this.serializer(this.partial);
    }
  }
}
