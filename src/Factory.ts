interface Shape {
    draw(): void
}

class Rectangle implements Shape {
    public draw(): void {
        console.log('Rectangle')
    }
}

class Square implements Shape {
    public draw(): void {
        console.log('Square')
    }
}

class Circle implements Shape {
    public draw(): void {
        console.log('Circle')
    }
}

type ShapeTypes = 'circle' | 'rectangle' | 'square'

class ShapeFactory {
    getShape(shapeType: string) {
        return {
            'circle': new Circle(),
            'rectangle': new Rectangle(),
            'square': new Square()
        }?.[shapeType.toLocaleLowerCase() as ShapeTypes] ?? null
    }
}
