> 建造者
>
> 用来创建复杂的复合对象

参考：https://juejin.cn/post/7250144333056966714

```ts
class Rect {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {}
  draw() {
    console.log("draw", {
      x,
      y,
      width,
      height,
    });
  }
}

class RectBuilder {
  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    return this;
  }

  build() {
    return new Rect(this.x, this.y, this.width, this.height);
  }
}

// 使用
const rect = new RectBuilder().setPos(100, 100).setSize(200, 200).build();
rect.draw();
```
