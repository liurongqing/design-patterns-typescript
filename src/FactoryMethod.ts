/**
 * 创建型模式：工厂方法
 * 在父类中创建对象的接口，由子类决定实例化对象的类型
 */
abstract class Creator {
    public abstract factoryMethod(): Product
    public someOperation(): string {
        const product = this.factoryMethod()
        return `creator: ${product.operation}`
    }
}

class ConcreateCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreateProduct1()
    }
}

class ConcreateCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreateProduct2()
    }
}

interface Product {
    operation(): string
}

class ConcreateProduct1 implements Product {
    public operation(): string {
        return 'concreate product1'
    }
}

class ConcreateProduct2 implements Product {
    public operation(): string {
        return 'concreate product1'
    }
}


function clientCode(creator: Creator) {
    console.log(creator.someOperation())
}

clientCode(new ConcreateCreator1())
clientCode(new ConcreateCreator2())

