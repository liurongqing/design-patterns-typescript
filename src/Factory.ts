/**
 * 抽象产品角色
 */
interface Product {
    use(): Function
}

/**
 * 具体产品角色
 */
class ProductA implements ProductA {
    use() {
        console.log('A')
    }
}

class ProductB implements ProductB {
    use() {
        console.log('B')
    }
}

type FactoryType = 'A' | 'B'
/**
 * 工厂角色
 */
class ProductFactory {
    constructor() { }

    createProduct(type: FactoryType) {
        const func = { 'A': ProductA, 'B': ProductB }[type]
        return func ? new func() : null
    }
}


const factory = new ProductFactory()
factory.createProduct('A')
factory.createProduct('B')