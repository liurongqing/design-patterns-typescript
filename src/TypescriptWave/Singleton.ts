// 懒汉式，需要时创建
class Singleton {
    private static instance: Singleton
    private constructor() { }
    public static getInstance() {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}


// 饿汉式，提前就创建好
class Singleton2 {
    private static instance = new Singleton2()
    private constructor() { }
    public static getInstance() {
        return Singleton2.instance
    }
}

function clientCode() {
    const singleton1 = Singleton.getInstance()
    const singleton2 = Singleton.getInstance()
    if (singleton1 === singleton2) {
        console.log('获取到同一个对象，是单例')
    } else {
        console.log('获取到不同对象，不是单例')
    }
}

clientCode()

// 创建本地作用域
export { }