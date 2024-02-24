> 抽象工厂
>
> 创建多个产品族中的产品对象

```ts
// 弹窗
interface Dialog {
  open(): void;
}

class MacDialog implements Dialog {
  open() {
    console.log("open Mac Dialog");
  }
}

class WindowDialog implements Dialog {
  open() {
    console.log("open Window Dialog");
  }
}

// 按钮
interface Button {
  draw(): void;
}

class MacButton implements Button {
  draw() {
    console.log("draw Mac Button");
  }
}

class WindowButton implements Button {
  draw() {
    console.log("draw Window Button");
  }
}

// 抽象工厂
interface SystemFactory {
  createDialog(): Dialog;
  createButton(): Button;
}

class MacFactory implements SystemFactory {
  createDialog() {
    return new MacDialog();
  }
  createButton() {
    return new MacButton();
  }
}

class WindowFactory implements SystemFactory {
  createDialog() {
    return new WindowDialog();
  }
  createButton() {
    return new WindowButton();
  }
}

const factory: SytemFactory = new MacFactory();
const dialog: Dialog = factory.createDialog();
const button: Button = factory.createButton();
dialog.open();
button.draw();
```
