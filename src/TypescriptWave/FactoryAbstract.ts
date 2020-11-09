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


interface Color {
    fill(): void
}

class Red implements Color {
    public fill() {
        console.log('我是红色')
    }
}

class Green implements Color {
    public fill() {
        console.log('我是绿色')
    }
}

// 为 Color 和 Shape 创建抽象来获取工厂
abstract class AbstractFactory {
    abstract getColor(shapeType: string): void
    abstract getShape(color: string): void
}


class ShapeFactory extends AbstractFactory {
    public getShape(shapeType: string) {
        if (!shapeType) return null
        if (shapeType === 'CIRCLE') {
            return new Circle()
        } else if (shapeType === 'SQUARE') {
            return new Square()
        }
        return null
    }
    public getColor(color: string) {
        return null
    }
}

class ColorFactory extends AbstractFactory {
    public getShape(shapeType: string) {
        return null
    }
    public getColor(color: string) {
        if (!color) return null
        if (color === 'RED') {
            return new Red()
        } else if (color === 'GREEN') {
            return new Green()
        }
        return null
    }
}


class FactoryProducer {
    static getFactory(choice: string) {
        if (choice === 'SHAPE') {
            return new ShapeFactory()
        } else if (choice === 'COLOR') {
            return new ColorFactory()
        }
        return null
    }
}


// 客户端调用
function clientCode() {
    const shapeFactory = FactoryProducer.getFactory('SHAPE')
    const shape1 = shapeFactory?.getShape('CIRCLE')
    shape1?.draw()


    const colorFactory = FactoryProducer.getFactory('COLOR')
    const color1 = colorFactory?.getColor('RED')
    color1?.fill()
}

clientCode()

// 创建本地作用域
export { }
