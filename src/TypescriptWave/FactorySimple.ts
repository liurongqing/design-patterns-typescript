/**
 * 简单工厂模式
 */
interface Shape {
    draw(): void
}


/**
 * 具体产品
 */
class Circle implements Shape {
    public draw() {
        console.log('我是圆形')
    }
}

class Square implements Shape {
    public draw() {
        console.log('我是正方形')
    }
}

// 创建工厂
class ShapeFactory {
    public getShape(shapeType: string) {
        if (!shapeType) return null
        if (shapeType === 'CIRCLE') {
            return new Circle()
        } else if (shapeType === 'SQUARE') {
            return new Square()
        } else {
            return null
        }
    }
}

// 客户端调用
function clientCode() {
    const shapeFactory = new ShapeFactory()
    const shape1 = shapeFactory.getShape('CIRCLE')
    shape1?.draw()

    const shape2 = shapeFactory.getShape('SQUARE')
    shape2?.draw()

}

clientCode()



// 创建本地作用域
export { }
