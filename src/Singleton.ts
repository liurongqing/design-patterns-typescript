export default class SingletonInstance {
    static instance: any
    constructor(){
        if(!SingletonInstance.instance) {
            SingletonInstance.instance = this
        }
        return SingletonInstance.instance
    }

    log(){
        console.log('123')
    }
}