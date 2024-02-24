> 工厂方法
>
> 让子类来决定要创建哪个对象
>
> 不同的工厂生产不同的产品

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

interface DialogFactory {
  createDialog(): Dialog;
}

class MacDialogFactory implements DialogFactory {
  createDialog() {
    return new MacDialog();
  }
}

class WindowDialogFactory implements DialogFactory {
  createDialog() {
    return new WindowDialog();
  }
}

const dialog: Dialog = new MacDialogFactory();
dialog.open();
```
