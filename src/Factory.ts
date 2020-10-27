interface Chair {
    hasLegs(): any
    sitOn(): any
}

class VictorianChair implements Chair {
    hasLegs() { }
    sitOn() { }
}

class ModernChair implements Chair {
    hasLegs() { }
    sitOn() { }
}

interface FurnitureFactory {
    createChair(): Chair
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(){}
}