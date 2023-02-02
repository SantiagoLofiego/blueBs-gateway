type Class = { new(...args: any[]): any }

type Factory = {
  [key: string]: {
    constructor: Class
    dependencies: string[]
  }
}

type Container = {
  [key: string]: any
}

class DiContainer {
  private container: Container;
  private factory: Factory

  constructor() {
    this.container = {};
    this.factory = {};
  }

  private addNewInstace<T>(classtype: string, ...args: any): void {
    this.container[classtype] = new this.factory[classtype].constructor(...args);
  }

  get<T>(className: string): T {
    if (this.container[className]) {
      return this.container[className]
    }
    if (!this.factory[className]) {
      throw new Error(`There is not dependency registered with name "${className}"`);

    }
    const depnedencies: string[] = this.factory[className].dependencies;
    const args: any[] = [];
    if (depnedencies.length > 0) {
      depnedencies.forEach((dependecie) => {
        args.push(this.get(dependecie))
      })
    }
    this.addNewInstace(className, ...args);
    return this.container[className]
  }

  registerClass(className: string, constructor: Class, dependecies?: string[]): void {
    this.factory[className] = { constructor, dependencies: dependecies || [] }
  }

  registerInstance(typeName: string, value: any): void {
    this.container[typeName] = value;
  }

}

export default DiContainer;

