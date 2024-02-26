> 原型模式
>
> 通过复制原型来创建新对象

```ts
interface CarProto {
  clone(): CarProto;
}

class Bus implements CarProto {
  public name: string;
  constructor() {
    this.name = "公交车";
  }

  public clone() {
    return Object.create(this);
  }
}
```
