> 一个类，只有一个实例

```ts
class Singleton {
  private static _instance: Singleton = null;
  public static instance() {
    if(this._instance === null) {
      this._instance = new Singleton();
    }
    return this._instance;
  }
}

// Singleton.instance.xx
```