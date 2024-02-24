> 简单工厂
>
> 创建对象，无需指定对象类

```ts
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

class DialogFactory {
  public static createDialog(type: "mac" | "window") {
    if (type === "mac") {
      return new MacDialog();
    }

    if (model === "window") {
      return new WindowDialog();
    }

    return null;
  }
}

const factory = DialogFactory.createDialog("mac");
factory.open();
```
