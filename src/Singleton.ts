/**
 * 创建型模式：单例模式
 * 确保一个类只有一个实例
 * 提供实例的全局访问点
 */

 
class Singleton {
    private static instance: Singleton

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    public someBusinessLogic() { }
}

function clientCode() {
    const s1 = Singleton.getInstance()
    const s2 = Singleton.getInstance()
    if (s1 === s2) {
        console.log('Singleton works')
    } else {
        console.log('Singleton failed')
    }
}

clientCode()